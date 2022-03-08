import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { UserDataService } from '../../service/user-data.service';
import { MenuDataService } from '../../service/menu-data.service';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AudioProvider } from '../../providers/audio/audio';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  idguia : any = null; 
  iditinerario : any = null;
  detalle_monumento : any = null;
  detalle : any = null;
  idparte : any = null;
  mydestines: any = null;
  titleaudio: any = null;
  showPlayAudio: any = null;

  detalles: Observable<any[]>;
  menu_guia_aux = null;
  lookFor = null;

  text_size: any = 16;
  datos = [];
  cambiado = null;
  textDefaultSize = 'font-size: ';
  textDefaultLineHeigth = 'line-height: ';
  arrayDefaultSize = ['9pt', '12px', '10pt', '12pt', '11pt']; //web destinoarte
 

  constructor(private dataService: MenuDataService, 
              private router: Router, 
              private serviceRegister: UserDataService, 
              private route: ActivatedRoute, 
              public sanitizer: DomSanitizer,
              private alertController: AlertController,
              public audioProvider: AudioProvider,
              private storage: Storage) { }

  ionViewWillEnter(){
    this.menu_guia_aux = new Array();
    this.detalles = this.dataService.getMenuGuia();

    this.serviceRegister.getModoAudio()
    .then(modoaudio =>{
      if(modoaudio != null){
        if(modoaudio == 'reproduciendo'){
          this.showPlayAudio = false;
        }
        if(modoaudio == 'pause'){
          this.showPlayAudio = true;
        }
      }
    });

    this.route.params.subscribe((params: any) => {
      if (params['id']) { 
          this.idguia = parseInt(params['id']);
          this.iditinerario = parseInt(params['iditi']);

          this.serviceRegister.getTitleAudio()
          .then(titleaudio=> {
            if(titleaudio != null){
              this.titleaudio = titleaudio;
            }
          });

          if(this.mydestines == null){
            this.serviceRegister.present('Obteniendo datos de los detalles..');
            this.serviceRegister.getAllData()
            .then(data =>{
              this.serviceRegister.dismiss();
              this.mydestines = data;
              this.detalles.subscribe(res =>{
                this.menu_guia_aux = res;
                
                if(this.mydestines != null){
                  this.getShowBtnHeader(this.mydestines, this.idguia, this.iditinerario);
                }
                //console.log("BtnDetailsShow : "+this.menu_guia_aux);
              });
              
            })
            .catch(error =>{
              this.serviceRegister.dismiss();
              console.log('Error al obtener los datos');
            })
          }else{
            this.detalles.subscribe(res =>{
              this.menu_guia_aux = res;
              this.getShowBtnHeader(this.mydestines, this.idguia, this.iditinerario);
            });
          }   
      }
    });
  }

  getShowBtnHeader(mydestines:any, idguia: any, iditinerario: any){

    this.lookFor = false;

    if(mydestines.monumento != null && mydestines.monumento.length > 0){
      mydestines.monumento.forEach(element => {
        if(idguia == element.idguia){
          if(iditinerario == 0){
            if(!this.lookFor){
              if(element.plano == null){
                this.elimina({name:"planta"});
              }
                this.showBtnDetails(element);
                this.detalle_monumento = element.detalle_monumento;
                this.fontActual(this.detalle_monumento);
            }  
            this.lookFor = true;
          }else{
            if(element.partes != null && element.partes.length > 0 && this.thisIsArray(element.partes)){
              element.partes.forEach(parte => {
                if(idguia == parseInt(parte.id_itinerario) && iditinerario == parseInt(parte.idguiapartes)){
                  if(!this.lookFor){
                    this.showBtnDetails(parte);
                    this.detalle = parte.detalles;
                    this.fontActual(this.detalle);
                  }
                  this.lookFor = true;
                }
              })
            }
          }
        }
      });
    }
    if(mydestines.monumento_comp != null && mydestines.monumento_comp.length > 0){
      mydestines.monumento_comp.forEach(element => {
          if(iditinerario == 0){
            if(!this.lookFor){
              if(element.plano == null && idguia == element.idguia){
                this.elimina({name:"planta"});
              }
              this.showBtnDetails(element);
              if(this.detalle_monumento == null){
                this.detalle_monumento = element.detalle_monumento;
                this.fontActual(this.detalle_monumento);
              }
            }
            this.lookFor = true;
          }else{
            if(this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0){
              element.partes.forEach(parte => {
                if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                  if(!this.lookFor){
                    this.showBtnDetails(parte);
                    this.detalle = parte.detalles;
                    this.fontActual(this.detalle);
                  }
                  this.lookFor = true;
                }
                if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                  parte.partes.forEach(parte => {
                    if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                      if(!this.lookFor){
                        this.showBtnDetails(parte);
                        this.detalle = parte.detalles;
                        this.fontActual(this.detalle);
                      }
                      this.lookFor = true;
                    }
                  });
                }
              });
            }
          }
        //}
      });
    }
    
    if(mydestines.dia != null && mydestines.dia.length > 0){
      mydestines.dia.forEach(element =>{
        if(iditinerario == 0){
          if(!this.lookFor){
            this.showBtnDetails(element);
            if(this.detalle_monumento == null && this.thisIsArray(element.detalle_monumento)){
                this.detalle_monumento = element.detalle_monumento;
                this.fontActual(this.detalle_monumento);
            }
          }
          this.lookFor = true;
        }else{
          if(this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0){
            element.partes.forEach(parte => {
              if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                if(!this.lookFor){
                  this.showBtnDetails(parte);
                  if(this.detalle == null && this.thisIsArray(parte.detalles)){
                      this.detalle = parte.detalles;
                      this.fontActual(this.detalle);
                  }
                }
                this.lookFor = true;
              }
              if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                parte.partes.forEach(parte => {
                  if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                    if(!this.lookFor){
                      this.showBtnDetails(parte);
                      if(this.detalle == null && this.thisIsArray(parte.detalles)){
                        this.detalle = parte.detalles;
                        this.fontActual(this.detalle);
                      }
                    }
                    this.lookFor = true;
                  }
                  if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                    parte.partes.forEach(parte =>{
                      if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                        if(!this.lookFor){
                          this.showBtnDetails(parte);
                          if(this.detalle == null && this.thisIsArray(parte.detalles)){
                            this.detalle = parte.detalles;
                            this.fontActual(this.detalle);
                          }
                        }
                        this.lookFor = true;
                      }
                    });
                  }
                });
              }
            });
          }
        }
      });
    }


    if(mydestines.itinerario != null && mydestines.itinerario.length > 0){
      mydestines.itinerario.forEach(element =>{
        if(iditinerario == 0){
          if(!this.lookFor){
            this.showBtnDetails(element);
            if(this.detalle_monumento == null && this.thisIsArray(element.detalle_monumento)){
              this.detalle_monumento = element.detalle_monumento;
              this.fontActual(this.detalle_monumento);
            }
          }
          this.lookFor = true;
        }else{
          if(this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0){
            element.partes.forEach(parte =>{
              if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                this.showBtnDetails(parte);
                if(!this.lookFor){
                  if(this.detalle == null && this.thisIsArray(parte.detalles)){
                    this.detalle = parte.detalles;
                    this.fontActual(this.detalle);
                  }
                }
                this.lookFor = true;
              }
              if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                parte.partes.forEach(parte =>{
                  if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                    if(!this.lookFor){
                      this.showBtnDetails(parte);
                      if(this.detalle == null && this.thisIsArray(parte.detalles)){
                        this.detalle = parte.detalles;
                        this.fontActual(this.detalle);
                      }
                    }
                    this.lookFor = true;
                  }
                  if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                    parte.partes.forEach(parte =>{
                      if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                        if(!this.lookFor){
                          this.showBtnDetails(parte);
                          if(this.detalle == null && this.thisIsArray(parte.detalles)){
                            this.detalle = parte.detalles;
                            this.fontActual(this.detalle);
                          }
                        }
                        this.lookFor = true;
                      }
                      if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                        parte.partes.forEach(parte =>{
                          if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                            if(!this.lookFor){
                              this.showBtnDetails(parte);
                              if(this.detalle == null && this.thisIsArray(parte.detalles)){
                                this.detalle = parte.detalles;
                                this.fontActual(this.detalle);
                              }
                            }
                            this.lookFor = true;
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        }
      });
    }

  }

  showBtnDetails(element: any){
    if(element.mapa != null && element.mapa.length == 0 || element.mapa == null){
      this.elimina({name: 'mapa'});
    }
    
    if(element.plano == null){
      this.elimina({name: 'planta'});
    }

    if(element.detalle_monumento != undefined){
      if(element.detalle_monumento != null && element.detalle_monumento.length == 0 || element.detalle_monumento == null){
        this.elimina({name: 'textos'});
      }
    }

    if(element.detalles != undefined){
      if(element.detalles != null && element.detalles.length == 0 ||element.detalles == null){
        this.elimina({name: 'textos'});
      }
    }

    if(element.infografia != null && element.infografia.length == 0 || element.infografia == null){
      this.elimina({name: 'infografias'});
    }
  }

  thisIsArray($array){
    return Array.isArray($array) ? true : false;
  }

  ngOnInit() {
  }

  setSizeText(contenido: any){
    this.presentAlertPrompt(contenido);
  }

  elimina(elem) {
    this.menu_guia_aux = this.menu_guia_aux.filter(e=> e.name!==elem.name);
  }

  async presentAlertPrompt(contenido: any) {

    this.detalle = contenido;

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Tamaño letra',
      inputs: [
        {
          name: 'peque',
          type: 'radio',
          label: 'Pequeño',
          value: 'min',
          handler: () => {
            console.log('Size min');
            this.text_size = '11pt';
          },
          checked: true
        },
        {
          name: 'medio',
          type: 'radio',
          label: 'Medio',
          value: 'med',
          handler: () => {
            console.log('Size medio');
            this.text_size = '15pt';
          }
        },
        {
          name: 'maximo',
          type: 'radio',
          label: 'Máximo',
          value: 'max',
          handler: () => {
            console.log('Size máximo');
            this.text_size = '21pt';
          }
        }
      ],
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'SI',
          handler: () => {
            console.log('Confirm Ok');
            setTimeout(() =>{
              
              this.datos = [];
              if(this.detalle !== undefined && this.detalle != null && this.thisIsArray(this.detalle)){
          
                let count = 0;
                this.cambiado = false;
                let res1, res2, res3, res4 = null;

                this.serviceRegister.getFontSize()
                .then(font=>{
                    if(font != null){  
                        this.detalle.forEach(text => {
                          if(text.tipo == 1 || text.id_tipo_parte == 1){
                            res1 = text.contenido.replaceAll(font, this.text_size);
                            this.detalle[count].contenido = res1;
                            this.storage.set('fontSize', this.text_size);  
                          }
                          count++;
                        });                             
                    }else{
                      this.detalle.forEach(text => {
                        if(text.tipo == 1 || text.id_tipo_parte == 1){
                          res1 = text.contenido.replaceAll(this.textDefaultSize.concat(this.arrayDefaultSize[0]), this.textDefaultSize.concat(this.text_size));
                          res2 = res1.replaceAll(this.textDefaultSize.concat(this.arrayDefaultSize[1]), this.textDefaultSize.concat(this.text_size));
                          res4 = res2.replaceAll(this.textDefaultSize.concat(this.arrayDefaultSize[4]), this.textDefaultSize.concat(this.text_size));
                          
                          res3 = res4.replaceAll(this.textDefaultLineHeigth.concat(this.arrayDefaultSize[3]), this.textDefaultLineHeigth.concat('18pt'));
                          
                          this.detalle[count].contenido = res3;
                          this.storage.set('fontSize', this.text_size);  
                        }
                        count++;
                      });
                    }
                });    
              }          
            }, 100);
          }
        }
      ]
    });

    await alert.present();
  }

  playAudio(){
    this.audioProvider.play();
    this.storage.set('modoAudio', 'reproduciendo');
    this.showPlayAudio = false;
  }

  pause(){
    this.audioProvider.pause();
    this.storage.set('modoAudio', 'pause');
    this.showPlayAudio = true;
  }

  fontActual(detalles: any){
    let res1, res2, res3, res4: any = null;
    this.serviceRegister.getFontSize()
    .then(size =>{
      if(size != null){
        let count = 0;    
        detalles.forEach(texto => {
          if(texto.tipo == 1 || texto.id_tipo_parte == 1){
            res1 = texto.contenido.replaceAll(this.textDefaultSize.concat(this.arrayDefaultSize[0]), this.textDefaultSize.concat(size));
            res2 = res1.replaceAll(this.textDefaultSize.concat(this.arrayDefaultSize[1]), this.textDefaultSize.concat(size));
            res4 = res2.replaceAll(this.textDefaultSize.concat(this.arrayDefaultSize[4]), this.textDefaultSize.concat(size));
            
            res3 = res4.replaceAll(this.textDefaultLineHeigth.concat(this.arrayDefaultSize[3]), this.textDefaultLineHeigth.concat('18pt'));
            
            detalles[count].contenido = res3;
          }
          count++;
        });
      }
      
    })
  }

  clickedStar(){

    let showBackMisDestinos = this.showPlayAudio;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        audio: JSON.stringify(showBackMisDestinos)
      }
    };

    this.router.navigate(['/tabs/mis-destinos/'.concat(this.idguia).concat('/').concat(this.iditinerario)], navigationExtras);
  }

}
