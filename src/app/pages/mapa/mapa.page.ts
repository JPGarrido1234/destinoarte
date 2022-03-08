import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuDataService } from '../../service/menu-data.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { UserDataService } from '../../service/user-data.service';
import { Storage } from '@ionic/storage';
import { AudioProvider } from '../../providers/audio/audio';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ViewMap } from '../../interfaces/interfaces';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {


  idguia : any = null; 
  iditinerario : any = null;
  idmapa: any = null;

  response_map : ViewMap[] = []; //id, tipo, url_mapa
  idparte : any = null;
  mydestines: any = null;
  mapa: Observable<any[]>;
  menu_guia_aux = null;
  lookFor = null;

  titleaudio: any = null;
  showPlayAudio: any = null;

  imgOpt = {
    zoom:{
      maxRatio : 5
    }
  }

  mapa_img: boolean = false;
  mapa_img_url: any = null;
  currentScreenOrientation:string;

  constructor(private dataService: MenuDataService, 
              private router: Router, 
              private serviceRegister: UserDataService, 
              private route: ActivatedRoute,
              public audioProvider: AudioProvider,
              private storage: Storage,
              private screenOrientation: ScreenOrientation) { 

                this.hiddenFooterHeader();
              
              }
  setObjetctMaps(idguia: any = null, object: any, tipo:any){
      if(object != null){
        object.forEach(mapa => {
          //this.response_map.push({"idguia": idguia, "iditi": mapa.id_guia, "titulo": mapa.titulo, "tipo": tipo, "mapa": mapa.mapa});   
          this.response_map.push({"idguia": idguia, "iditi": mapa.id_guia, "titulo": mapa.titulo, "tipo": tipo, "mapa": mapa.mapa});   
          console.log(this.response_map);
        });
      }
  }

  getShowBtnHeader(mydestines:any, idguia: any, iditinerario: any){
  
    this.response_map = [];
    this.lookFor = false;

    if(mydestines.monumento != null && mydestines.monumento.length > 0){
      mydestines.monumento.forEach(element => {
          if(iditinerario == 0){
            if(idguia == element.idguia){
              if(!this.lookFor){
                if(element.plano == null){
                  this.elimina({name:"planta"});
                }
                this.showBtnDetails(element);
                this.setObjetctMaps(element.idguia, element.mapa, 'mon');
              }
              this.lookFor = true;
            }
          }else{
            if(element.partes != null && element.partes.length > 0 && this.thisIsArray(element.partes)){
              element.partes.forEach(parte =>{
                if(idguia == parte.idguiapartes && iditinerario == parseInt(parte.id_itinerario)){
                //if(idguia == parseInt(parte.id_itinerario) && iditinerario == parte.idguiapartes){
                  if(!this.lookFor){
                    this.showBtnDetails(parte);
                    this.setObjetctMaps(parte.idguiapartes, parte.mapa, 'mon');
                  }
                  this.lookFor = true;
                }
              });
            }
          }
      });
    }

    if(mydestines.monumento_comp != null && mydestines.monumento_comp.length > 0){
      mydestines.monumento_comp.forEach(element => {
          if(iditinerario == 0){
            if(idguia == element.idguia){
              if(!this.lookFor){
                if(element.plano == null){
                  this.elimina({name:"planta"});
                }
                this.showBtnDetails(element);
                this.setObjetctMaps(element.idguia, element.mapa, 'monc');
              }
              this.lookFor = true;
            }
          }else{
            if(this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0){
              element.partes.forEach(parte => {
                if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                  if(!this.lookFor){
                    this.showBtnDetails(parte);
                    this.setObjetctMaps(parte.idguiapartes, parte.mapa, 'monc');
                  }
                  this.lookFor = true;
                }
                if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                  parte.partes.forEach(parte => {
                    if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                      if(!this.lookFor){
                        this.showBtnDetails(parte);
                        this.setObjetctMaps(parte.idguiapartes, parte.mapa, 'monc');
                      }
                      this.lookFor = true;
                    }
                  });
                }
              });
            }
          }
        
      });
    }

    if(mydestines.dia != null && mydestines.dia.length > 0){
      mydestines.dia.forEach(element =>{
          if(iditinerario == 0){
            if(idguia == element.idguia){
              if(!this.lookFor){
                this.showBtnDetails(element);
                this.setObjetctMaps(element.idguia, element.mapa, 'dia');
              }
              this.lookFor = true;
            }
          }else{
            if(this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0){
              element.partes.forEach(parte => {
                if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                  if(!this.lookFor){
                    this.showBtnDetails(parte);
                    this.setObjetctMaps(parte.idguiapartes, parte.mapa, 'dia');
                  }
                  this.lookFor = true;
                }
                if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                  parte.partes.forEach(parte => {
                    if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                      if(!this.lookFor){
                        this.showBtnDetails(parte);
                        this.setObjetctMaps(parte.idguiapartes, parte.mapa, 'dia');
                      }
                      this.lookFor = true;
                    }
                    if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                      parte.partes.forEach(parte =>{
                        if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                          if(!this.lookFor){
                            this.showBtnDetails(parte);
                            this.setObjetctMaps(parte.idguiapartes, parte.mapa, 'dia');
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
          if(idguia == element.idguia){
            if(!this.lookFor){
              this.showBtnDetails(element);
              this.setObjetctMaps(element.idguia, element.mapa, 'iti');
            }
            this.lookFor = true;
          }
        }else{
          if(this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0){
            element.partes.forEach(parte =>{
              if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                if(!this.lookFor){
                  this.showBtnDetails(parte);
                  this.setObjetctMaps(parte.idguiapartes, parte.mapa, 'iti');
                }
                this.lookFor = true;
              }
              if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                parte.partes.forEach(parte =>{
                  if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                    if(!this.lookFor){
                      this.showBtnDetails(parte);
                      this.setObjetctMaps(parte.idguiapartes, parte.mapa, 'iti');   
                    }
                    this.lookFor = true;       
                  }
                  if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                    parte.partes.forEach(parte =>{
                      if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                        if(!this.lookFor){
                          this.showBtnDetails(parte);
                          this.setObjetctMaps(parte.idguiapartes, parte.mapa, 'iti');
                        }
                        this.lookFor = true;
                      }
                      if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                        parte.partes.forEach(parte =>{
                          if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                            if(!this.lookFor){
                              this.showBtnDetails(parte);
                              this.setObjetctMaps(parte.idguiapartes, parte.mapa, 'iti');
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
    
    this.response_map = this.response_map.filter(e => e.idguia == idguia);

  }

  ionViewWillEnter(){
    this.menu_guia_aux = new Array();

    this.mapa = this.dataService.getMenuGuia();

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

          if(params['idm'] != undefined){
            this.idmapa = parseInt(params['idm']);
          }

          this.serviceRegister.getTitleAudio()
          .then(titleaudio=> {
            if(titleaudio != null){
              this.titleaudio = titleaudio;
            }
          });

          if(this.mydestines == null){
            this.serviceRegister.present('Preparando mapa..');
            this.serviceRegister.getAllData()
            .then(data =>{
              if(data != null){
                this.mydestines = data;

                this.serviceRegister.getTitleAudio()
                .then(titleaudio=> {
                  if(titleaudio != null){
                    this.titleaudio = titleaudio;
                  }
                });

                this.mapa.subscribe(res =>{
                  this.menu_guia_aux = res;

                  if(this.mydestines != null){
                    this.getShowBtnHeader(this.mydestines, this.idguia, this.iditinerario);  
                  }
                });
              }
              this.serviceRegister.dismiss();             
            })
            .catch(error =>{
              this.serviceRegister.dismiss();
              console.log('Error al obtener los datos');
            })
          }else{
            this.mapa.subscribe(res =>{
              this.menu_guia_aux = res;
              this.getShowBtnHeader(this.mydestines, this.idguia, this.iditinerario);
            });
          }
             
      }
    });

  }

  showBtnDetails(element: any){
  
    if(element.mapa == null){
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

  elimina(elem) {
    this.menu_guia_aux = this.menu_guia_aux.filter(e=> e.name!==elem.name);
  }

  playAudio(){
    this.audioProvider.play();
    this.storage.set('modoAudio', 'reproduciendo');
    this.showPlayAudio = false;
  }

  hiddenFooterHeader(){
    this.currentScreenOrientation = this.screenOrientation.type; 
    this.screenOrientation.onChange().subscribe(
      () => {
        this.currentScreenOrientation = this.screenOrientation.type;
        if(this.currentScreenOrientation == 'landscape-primary' || this.currentScreenOrientation == 'landscape-secondary'){
          if(this.mapa_img == true){
            document.getElementById('header').style.display = 'none';
            document.getElementById('footer').style.display = 'none';
          }else{
            document.getElementById('header').style.display = 'block';
            document.getElementById('footer').style.display = 'block';  
          }
          
        }else{
          document.getElementById('header').style.display = 'block';
          document.getElementById('footer').style.display = 'block';
        }
      }
    );
  }

  pause(){
    this.audioProvider.pause();
    this.storage.set('modoAudio', 'pause');
    this.showPlayAudio = true;
  }

  showPhoto(url: any){
    if(url != null){
      this.mapa_img_url = url;
      this.mapa_img = true;
    }
  }


  clickedStar(){

    

    if(this.mapa_img){
      this.mapa_img = false;
    }else{
      
      let showBackMisDestinos = this.showPlayAudio;
      let navigationExtras: NavigationExtras = {
        queryParams: {
          audio: JSON.stringify(showBackMisDestinos)
        }
      };

      if(this.idmapa != null){
        this.router.navigate(['/tabs/mis-destinos/']);  
      }else{
        this.router.navigate(['/tabs/mis-destinos/'.concat(this.idguia).concat('/').concat(this.iditinerario)], navigationExtras);
      }
    }
  }

}
