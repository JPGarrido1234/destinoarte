import { Component, OnInit } from '@angular/core';
import { MenuDataService } from '../../service/menu-data.service';
import { Router, ActivatedRoute, NavigationExtras, NavigationEnd } from '@angular/router';
import { UserDataService } from '../../service/user-data.service';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { AudioProvider } from '../../providers/audio/audio';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-infografias',
  templateUrl: './infografias.page.html',
  styleUrls: ['./infografias.page.scss'],
})
export class InfografiasPage implements OnInit {

  idguia : any = null;
  iditinerario : any = null;
  response_info : any = null; 
  idparte : any = null;
  mydestines: any = null;
  infografia: Observable<any[]>;
  menu_guia_aux = null;
  lookFor = null;

  showPlayAudio: any = null;
  titleaudio: any = null;

  infografia_img: boolean = false;
  infografia_img_url: any = null;

  imgOpt = {
    zoom:{
      maxRatio : 5
    }
  }

  currentScreenOrientation:string;

  constructor(private dataService: MenuDataService, 
              private router: Router, 
              private serviceRegister: UserDataService, 
              private route: ActivatedRoute,
              public audioProvider: AudioProvider,
              private storage: Storage,
              private photoViewer: PhotoViewer,
              private screenOrientation: ScreenOrientation) {

                  this.hiddenFooterHeader();
               
               }

  ionViewWillEnter(){
    this.menu_guia_aux = new Array();
    this.infografia = this.dataService.getMenuGuia();

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
          this.idguia = params['id'];
          this.iditinerario = parseInt(params['iditi']);

          this.serviceRegister.getTitleAudio()
          .then(titleaudio=> {
            if(titleaudio != null){
              this.titleaudio = titleaudio;
            }
          });

          if(this.mydestines == null){
            this.serviceRegister.present('Preparando infografías..');
            this.serviceRegister.getAllData()
            .then(data =>{
              this.serviceRegister.dismiss();
              this.mydestines = data;
              this.infografia.subscribe(res =>{
                this.menu_guia_aux = res;
                
                if(this.mydestines != null){
                  this.getShowBtnHeader(this.mydestines, this.idguia, this.iditinerario);
                }
              });  
                       
            })
            .catch(error =>{
              this.serviceRegister.dismiss();
              console.log('Error al obtener los datos');
            })
          }else{
            this.infografia.subscribe(res =>{
              this.menu_guia_aux = res;
              this.getShowBtnHeader(this.mydestines, this.idguia, this.iditinerario);
            });
          } 
      }
    });
  }

  getShowBtnHeader(mydestines: any, idguia:any, iditinerario: any){

    this.response_info = null;
    this.lookFor = false;

    if(mydestines.monumento != null && mydestines.monumento.length > 0){
      mydestines.monumento.forEach(element => {
        if(idguia == element.idguia){
          if(iditinerario == 0){
            if(!this.lookFor){
              this.showBtnDetails(element);
              this.response_info = element.infografia;
            }
            this.lookFor = true;
          }else{
            if(element.partes != null && element.partes.length > 0 && this.thisIsArray(element.partes)){
              element.partes.forEach(parte =>{
                if(idguia == parte.id_itinerario && iditinerario == parseInt(parte.idguiapartes)){
                  if(!this.lookFor){
                    this.showBtnDetails(parte);
                    this.response_info = parte.infografia;
                  }
                  this.lookFor = true;
                }
              });
            }
          }
        }
      });
    }
    
    if(mydestines.monumento_comp != null && mydestines.monumento_comp.length > 0){
      mydestines.monumento_comp.forEach(element => {
        //if(this.idguia == element.idguia){
          if(iditinerario == 0){
            if(!this.lookFor){
              this.showBtnDetails(element);
              this.response_info = element.infografia;
            }
            this.lookFor = true;
          }else{
            if(this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0){
              element.partes.forEach(parte => {
                if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                  if(!this.lookFor){
                    this.showBtnDetails(parte);
                    this.response_info = parte.infografia;
                  }
                  this.lookFor = true;
                }
                if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                  parte.partes.forEach(parte => {
                    if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                      //console.log(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario));
                      if(!this.lookFor){
                        this.showBtnDetails(parte);
                        this.response_info = parte.infografia;
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
            if(this.response_info == null && this.thisIsArray(element.infografia)){
              this.response_info = element.infografia;
            }
          }
          this.lookFor = true;
        }else{
          if(this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0){
            element.partes.forEach(parte => {
              if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                if(!this.lookFor){
                  this.showBtnDetails(parte);
                  if(this.response_info == null && this.thisIsArray(parte.infografia)){
                    this.response_info = parte.infografia;
                  }
                }
                this.lookFor = true;
              }
              if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                parte.partes.forEach(parte => {
                  if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                    if(!this.lookFor){
                      this.showBtnDetails(parte);
                      if(this.response_info == null && this.thisIsArray(parte.infografia)){
                        this.response_info = parte.infografia;
                      }
                    }
                    this.lookFor = true;
                  }
                  if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                    parte.partes.forEach(parte =>{
                      if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                        if(!this.lookFor){
                          this.showBtnDetails(parte);
                          if(this.response_info == null && this.thisIsArray(parte.infografia)){
                            this.response_info = parte.infografia;
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
            if(this.response_info == null && this.thisIsArray(element.infografia)){
              this.response_info = element.infografia;
            }
          }
          this.lookFor = true;
        }else{
          if(this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0){
            element.partes.forEach(parte =>{
              if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                if(!this.lookFor){
                  this.showBtnDetails(parte);
                  if(this.response_info == null && this.thisIsArray(parte.infografia)){
                    this.response_info = parte.infografia;
                  }
                }
                this.lookFor = true;
              }
              if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                parte.partes.forEach(parte =>{
                  if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                    if(!this.lookFor){
                      this.showBtnDetails(parte);
                      if(this.response_info == null && this.thisIsArray(parte.infografia)){
                        this.response_info = parte.infografia;
                      }
                    }
                    this.lookFor = true;
                  }
                  if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                    parte.partes.forEach(parte =>{
                      if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                        if(!this.lookFor){
                          this.showBtnDetails(parte);
                          if(this.response_info == null && this.thisIsArray(parte.infografia)){
                            this.response_info = parte.infografia;
                          }
                        }
                        this.lookFor = true;
                      }
                      if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                        parte.partes.forEach(parte =>{
                          if(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)){
                            if(!this.lookFor){
                              this.showBtnDetails(parte);
                              if(this.response_info == null && this.thisIsArray(parte.infografia)){
                                this.response_info = parte.infografia;
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

  showPhoto(url: any){  
    if(url != null){      
      this.infografia_img_url = url;
      this.infografia_img = true;
    }
  }

  hiddenFooterHeader(){
    this.currentScreenOrientation = this.screenOrientation.type; 
    this.screenOrientation.onChange().subscribe(
      () => {
        this.currentScreenOrientation = this.screenOrientation.type;
        if(this.currentScreenOrientation == 'landscape-primary' || this.currentScreenOrientation == 'landscape-secondary'){
          if(this.infografia_img == true){
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

  elimina(elem) {
    this.menu_guia_aux = this.menu_guia_aux.filter(e=> e.name!==elem.name);
  }

  clickedStar(){

    if(this.infografia_img){
      this.infografia_img = false;
    }else{
      let showBackMisDestinos = this.showPlayAudio;
      let navigationExtras: NavigationExtras = {
        queryParams: {
          audio: JSON.stringify(showBackMisDestinos)
        }
      };

      this.router.navigate(['/tabs/mis-destinos/'.concat(this.idguia).concat('/').concat(this.iditinerario)], navigationExtras);
    }
  }

}
