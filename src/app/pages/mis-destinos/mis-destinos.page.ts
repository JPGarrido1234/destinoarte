import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition } from '@angular/animations';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { UserDataService } from 'src/app/service/user-data.service';
import { Storage } from '@ionic/storage';
import { MenuDataService } from '../../service/menu-data.service';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { AudioProvider } from '../../providers/audio/audio';
import { CANPLAY, LOADEDMETADATA, LOADSTART, PLAYING, RESET, TIMEUPDATE } from '../../providers/store/store';
import {pluck, filter, map, distinctUntilChanged} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { ListAudioExist, ListViewAudioInit, ListViewPlants, ListProvUrl } from '../../interfaces/interfaces';
import { IListAudioExist } from '../../interfaces/IListAudioExist';



@Component({
  selector: 'app-mis-destinos',
  templateUrl: './mis-destinos.page.html',
  animations: [
    trigger('showHide', [
      state(
        'active',
        style({
          opacity: 1
        })
      ),
      state(
        'inactive',
        style({
          opacity: 0
        })
      ),
      transition('inactive => active', animate('250ms ease-in')),
      transition('active => inactive', animate('250ms ease-out'))
    ])
  ],
  styleUrls: ['./mis-destinos.page.scss'],
})
export class MisDestinosPage implements OnInit {

  userId: any = null;
  mydestines: any = null;
  arr_mon_vistos: Array<Number> = new Array();

  dataResponseGuia: any = null;
  dataResponseItinerario: any = null;
  responseIdguia: any = null;
  responseIdItinerario: any = null;
  
  title_header: string = null;
  title_header_show: boolean = false;
  arr_title_header: Array<String> = new Array();

  res_prov_imgUrl: ListProvUrl[] = [];

  showSearchCity: boolean = true;
  res_prov_es: Array<String> = new Array();
  

  res_prov_other: Array<String> = new Array();
  cities: any = null;
  cont_asoc_mon = null;
  cont_asoc_monc = null;
  cont_asoc_day = null;
  cont_asoc_iti = null;
  show_day = false;
  show_mon = false;
  show_iti = false;


  city: any = null;

  clickAudio: boolean = false;
  showPause : boolean = false;

  menu_guia: Observable<any[]>;
  menu_guia_aux = null;
  lookFor = null;

  seekbar: FormControl = new FormControl("seekbar");
  state: any = {};
  onSeekState: boolean = false;
  currentFile: any = {};
  modoAudio: String = null;
  filePlaySong = null;
  playAudioback: boolean = false;

  show_btn_planta: any = false;

  porcentaje = 0.5;
  selectOptions: any = { 
    header: 'Ciudades', 
    subHeader: 'Selecciona una ciudad', 
    translucent: true,
    cssClass: 'my-class'
  };

  show: string = 'showd-';
  showDA: string = 'showda-';
  showI: string = 'showi-';
  showIA: string = 'showia-';
  showM: string = 'showm-';
  showMC: string = 'showmc-';

  showMonCIconAdd: string = 'showMonCIconAdd-';
  showMonCIconRemove: string = 'showMonCIconRemove-';

  showMonIconAdd: string = 'showMonIconAdd-';
  showMonIconRemove: string = 'showMonIconRemove-';

  showIIconAdd: string = 'showIIconAdd-';
  showIIconRemove: string = 'showIIconRemove-';
  showIIconAddItems: string = 'showIIconAddItems-';
  showIIconRemoveItems: string = 'showIIconRemoveItems-';

  showDIconAddItems: string = 'showDIconAddItems-';
  showDIconRemoveItems: string = 'showDIconRemoveItems-';

  showDIconAddItemsA: string = 'showDIconAddItemsA-';
  showDIconRemoveItemsA: string = 'showDIconRemoveItemsA-';

  showDIconAddItemsIA: string = 'showDIconAddItemsIA-';
  showDIconRemoveItemsIA: string = 'showDIconRemoveItemsIA-';


  showIitems: string = 'showiI-';
  showDItems: string = 'showdI-';

  seekbarCount = null;

  audioExist: ListAudioExist[] = [];
  tipoAudio = null;
  audioNow: AudioProvider = null;

  order: string = 'orden';
  datosMisdestinos: boolean = false;
  rutaMapa = '/mapa/';

  list_view_audio_init: ListAudioExist[] = [];
  response_plano_object : ListViewPlants[] = []; 

  prov_img_url = null;

  constructor(public alertCtrl: AlertController,
              private dataService: MenuDataService, 
              private router: Router, 
              private serviceRegister: UserDataService, 
              private storage: Storage, 
              private route: ActivatedRoute,  
              private store: Store<any>,
              public audioProvider: AudioProvider,
              public platform: Platform,
              public navCtrl: NavController) { 
              }


    ngOnInit() {

      this.dataResponseGuia = null;

      if(this.dataResponseGuia == null){
        this.clickAudio = false;
      
        this.platform.ready().then(() => {
          this.serviceRegister.present('Cargando datos..');
          this.serviceRegister.getCities() 
          .then(data =>{
            if(data != null){
              this.cities = JSON.parse(data.data);
              this.cities.forEach(element => {
                if(element.codigo == 'es'){
                  this.res_prov_es.push(element.nombre);
                }else{
                  this.res_prov_other.push(element.nombre);
                }
                this.res_prov_imgUrl.push({"nombre":element.nombre, "urlimg": element.url_img});
                this.storage.set('provImgUrl', this.res_prov_imgUrl);
              });
              if(this.userId == null || this.mydestines == null){
                this.serviceRegister.getAllData()
                .then(res =>{
                  if(res != null){
                    this.orderItinerario(res.itinerario);
                    this.orderDay(res.dia);
                    this.orderMonumentComp(res.monumento_comp);   
                    this.orderMonument(res.monumento);                

                    this.mydestines = res;
                    if(this.arr_title_header.length == 0 || this.arr_title_header == null){
                      this.existCityInSelect(this.mydestines);
                    }
                    this.serviceRegister.dismiss();
                  }else{
                      this.serviceRegister.getUserId()
                      .then(data =>{
                        if(data != null){
                          this.userId = data;
                          this.serviceRegister.getDataMyDestines(this.userId)
                          .then(data =>{
                            if(data != null){
                              res = JSON.parse(data.data);
                              
                              this.orderItinerario(res.itinerario);
                              this.orderDay(res.dia);
                              this.orderMonumentComp(res.monumento_comp);
                              this.orderMonument(res.monumento);

                              this.mydestines = res;
                              
                              this.existCityInSelect(this.mydestines);

                              this.storage.get('provImgUrl')
                              .then(urlImg =>{
                                if(urlImg != null){
                                  this.prov_img_url = urlImg;
                                }
                              })
                              
                              this.storage.set('mydestines', this.mydestines);
                            }
                            this.serviceRegister.dismiss();
                          })
                          .catch(error => {
                            if(error != null){
                              console.log('Error al obtener los datos de los destinos.');
                            }
                            this.serviceRegister.dismiss();
                          });
                        }
                      })
                    .catch(error =>{
                      if(error != null){
                        console.log('Error al obtener datos del usuario');   
                      }
                      this.serviceRegister.dismiss();
                    });
                  }
                }).catch(err =>{
                  this.serviceRegister.dismiss();
                });
              }
            }
          })
          .catch(error =>{
            if(error != null){
              console.log('Error al obtener el listado de ciudades');
              this.serviceRegister.dismiss();
            }
          });   
        });

      }
  }

  orderItinerario(res: any){

    if(this.thisIsArray(res) && res.length > 0){
      this.orderByCity(res);
      res.forEach(nivel1 => {
        if(this.thisIsArray(nivel1.partes) && nivel1.partes.length > 0){
          nivel1.partes.sort(function(a, b){
            return a.orden - b.orden;
          });
          nivel1.partes.forEach(nivel2 => {
            if(this.thisIsArray(nivel2.partes) && nivel2.partes.length > 0){
              nivel2.partes.sort(function(a, b){
                return a.orden - b.orden;
              });
              nivel2.partes.forEach(nivel3 => {
                if(this.thisIsArray(nivel3.partes) && nivel3.partes.length > 0){
                  nivel3.partes.sort(function (a, b){
                    return a.orden - b.orden;
                  });
                  nivel3.partes.forEach(nivel4 => {
                    if(this.thisIsArray(nivel4.partes) && nivel4.partes.length > 0){
                      nivel4.partes.sort(function (a, b){
                        return a.orden - b.orden;
                      });
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

  orderDay(res: any){
    if(this.thisIsArray(res) && res.length > 0){
      this.orderByCity(res);
      res.forEach(nivel1 =>{
        if(this.thisIsArray(nivel1.partes) && nivel1.partes.length > 0){
          nivel1.partes.sort(function(a, b){
            return a.orden - b.orden;
          });
          nivel1.partes.forEach(nivel2 => {
             if(this.thisIsArray(nivel2.partes) && nivel2.partes.length > 0){
               nivel2.partes.sort(function (a, b){
                 return a.orden - b.orden;
               });
               nivel2.partes.forEach(nivel3 => {
                 if(this.thisIsArray(nivel3.partes) && nivel3.partes.length > 0){
                   nivel3.partes.sort(function (a, b){
                    return a.orden - b.orden;
                   });
                 }
               });
             }
          });
        }
      });
    }
  }

  orderMonumentComp(res: any){
    if(this.thisIsArray(res) && res.length > 0){
      this.orderByCity(res);
      res.forEach(arr_monc => {
        if(this.thisIsArray(arr_monc.partes) && arr_monc.partes.length > 0){
          arr_monc.partes.forEach(arr_partes => {
            if(this.thisIsArray(arr_partes.partes) && arr_partes.partes.length > 0){
              arr_partes.partes.sort(function(a, b){
                return a.orden - b.orden;
              });     
              arr_partes.partes.forEach(subpartes => {
                if(this.thisIsArray(subpartes.partes) && subpartes.partes.length > 0){
                  subpartes.partes.sort(function(a, b){
                    return a.orden - b.orden;
                  }); 
                }
              });
            }
          });
        }
      });
    }
  }

  orderMonument(res: any){
    if(this.thisIsArray(res) && res.length > 0){    
        this.orderByCity(res);
    }
  }

  orderByCity(res: any){
    res.sort(function(a,b){
      if (a.ciudad_guia > b.ciudad_guia) {
        return 1;
      }
      if (a.ciudad_guia < b.ciudad_guia) {
        return -1;
      }
      return 0;
    });
  }

  ionViewWillEnter(){

    this.menu_guia_aux = new Array();
    this.showSearchCity = true;
    this.menu_guia = this.dataService.getMenuGuia();
    this.title_header = null;
    this.seekbarCount = null;
    this.show_mon = false;
    this.show_iti = false;

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.datosMisdestinos = JSON.parse(params.special);  
        if(!this.datosMisdestinos){
          this.clickAudio = false;
          this.showSearchCity = true;
        }
      }
    });


  this.store.select('appState').subscribe((value: any) => {
    this.state = value.media;
  });

  this.store
    .select('appState')
    .pipe(
      pluck('media', 'timeSec'),
      filter(value => value !== undefined),
      map((value: any) => Number.parseInt(value)),
      distinctUntilChanged()
    )
    .subscribe((value: any) => {
      this.seekbarCount = value;
    });

    this.route.queryParams.subscribe(params => {
      if (params && params.audio) {
        this.playAudioback = JSON.parse(params.audio);  

        if(this.playAudioback){
          this.showPause = false;
        }
    
        if(!this.playAudioback){
          this.showPause = true;
        }
      }
    });

      this.serviceRegister.getShowPlayAudio()
      .then(play =>{
        if(play != null){
          if(play == true){
            this.showPause = false;
          }else{
            this.showPause = true;
          }
        }
      });

    if(this.datosMisdestinos == true){
      if(this.title_header == null){
        this.serviceRegister.getTitleHeader()
        .then(header =>{
          if(header != null){
            this.title_header = header;
            this.clickAudio = false;
            this.showSearchCity = false;  
          }
        });
      }   
    }
  
      
      if(this.route.snapshot.data['special']){
        if (this.route.snapshot.data['special'].idguia != null) {
          this.dataResponseGuia = this.route.snapshot.data['special'].idguia;
          this.dataResponseItinerario = this.route.snapshot.data['special'].iditinerario;
          if(this.dataResponseGuia != null){

            this.responseIdguia = JSON.parse(this.dataResponseGuia);
            this.responseIdItinerario = JSON.parse(this.dataResponseItinerario);

            this.serviceRegister.getPlayAudio()
            .then(audio =>{
              if(audio != null){
                this.playStream(audio);
                this.showPause = false;
                this.storage.set('playAudio', null);
              }
            });

            if(this.mydestines == null){
             
              this.serviceRegister.getAllData()
              .then(data =>{
                if(data != null){
                  this.mydestines = data;
                  this.serviceRegister.getTipoAudio()
                  .then(tipo =>{
                    if(tipo != null){ 
                      this.tipoAudio = tipo;
                      this.showPause = false;
                      this.getshowBtnDetails();
                      //console.log('this.tipoAudio : '+this.tipoAudio);
                    }
                  });
                  
                }    
              });

              if(!this.showSearchCity){
                console.log('Muestra reproductor..');
              }
            }else{
              this.serviceRegister.getTipoAudio()
              .then(tipo =>{
                if(tipo != null){ 
                  this.tipoAudio = tipo;
                  this.showPause = false;
                  this.getshowBtnDetails();
                  console.log('this.tipoAudio : '+this.tipoAudio);
                }
              });
            }
            this.clickAudio = true;
            console.log('this.clickAudio : '+this.clickAudio);
            
          }
        }
      }
  }

  lookForTitle(list: any, titulo: string){
    let search = false;
    list.find(plan => {
      if(plan.title === titulo){
        search = true;
      }
    });
    return search;
  }

  getshowBtnDetails(){

    this.lookFor = false;

    this.menu_guia.subscribe(res =>{
      this.menu_guia_aux = res;

      this.serviceRegister.getTitleHeader()
        .then(header =>{
          if(header != null){

            if(this.thisIsArray( this.mydestines.monumento) &&  this.mydestines.monumento.length > 0){
              this.mydestines.monumento.forEach(element =>{
                
                if(this.responseIdguia == element.idguia){
                  if(this.responseIdItinerario == 0){
                    if(!this.lookFor){
                      if(element.plano == null){
                        this.elimina({name:"planta"});
                      }
                      this.showBtnDetails(element);
                    }
                    this.lookFor = true;
                  }else{
                    if(element.partes != null && element.partes.length > 0 && this.thisIsArray(element.partes)){
                      element.partes.forEach(parte => {
                        if(this.responseIdguia == parseInt(parte.id_itinerario) && this.responseIdItinerario == parseInt(parte.idguiapartes)){
                            if(!this.lookFor){
                              this.showBtnDetails(parte);
                              this.lookFor = true;
                            }
                        }
                      });
                    }
                  }
                }
                  if(this.thisIsArray(element.plano)){
                    element.plano.forEach(plano => {
                      let obj = false;  
                      obj = this.lookForTitle(this.response_plano_object, plano.titulo);

                      if(!obj){
                        this.response_plano_object.push({"idguia": element.idguia,"url_plano":plano.plano, "title": plano.titulo});
                      }
                    });
                  }
              });
            }
            
            if(this.thisIsArray( this.mydestines.monumento_comp) &&  this.mydestines.monumento_comp.length > 0){
              this.mydestines.monumento_comp.forEach(element =>{
                
                  if(this.responseIdItinerario == 0){
                    if(this.responseIdguia == element.idguia){
                      if(!this.lookFor){
                        if(element.plano == null){
                          this.elimina({name:"planta"});
                        }
                        this.showBtnDetails(element);
                      }
                      this.lookFor = true;
                    }
                  }else{
                    if(this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0){
                      element.partes.forEach(parte => {
                        if(this.responseIdguia == parseInt(parte.idguiapartes) && this.responseIdItinerario == parseInt(parte.id_itinerario)){
                          if(!this.lookFor){
                            this.showBtnDetails(parte);
                          }
                          this.lookFor = true;
                        }
                        if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                          parte.partes.forEach(parte => {
                            if(this.responseIdguia == parseInt(parte.idguiapartes) && this.responseIdItinerario == parseInt(parte.id_itinerario)){
                              if(!this.lookFor){
                                this.showBtnDetails(parte);
                              }
                              this.lookFor = true;
                            }   
                          });
                        }
                      });
                    }
                  }
                
                    if(this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0){
                      element.partes.forEach(partes => {
                        if(this.thisIsArray(partes.plano) && partes.plano.length > 0){
                          partes.plano.forEach(plano => {
                            let obj = false;  
                            obj = this.lookForTitle(this.response_plano_object, plano.titulo);
                            if(!obj){
                              this.response_plano_object.push({"idguia": plano.id_guia, "url_plano": plano.plano, "title": plano.titulo});
                            }
                          });
                        }
                      });
                    }
                
              });
            }

            if(this.thisIsArray( this.mydestines.dia) &&  this.mydestines.dia.length > 0){
              this.mydestines.dia.forEach(element =>{
                if(this.responseIdguia == element.idguia){
                  if(this.responseIdItinerario == 0){
                    if(!this.lookFor){
                      this.showBtnDetails(element);
                    }
                    this.lookFor = true;
                  }else{
                    if(this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0){
                      element.partes.forEach(parte => {
                        if(this.responseIdguia == parseInt(parte.idguiapartes) && this.responseIdItinerario == parseInt(parte.id_itinerario)){
                          if(!this.lookFor){
                            this.showBtnDetails(parte);
                          }
                          this.lookFor = true;
                        }
                        if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                          parte.partes.forEach(parte => {
                            if(this.responseIdguia == parseInt(parte.idguiapartes) && this.responseIdItinerario == parseInt(parte.id_itinerario)){
                              if(!this.lookFor){
                                this.showBtnDetails(parte);
                              }
                              this.lookFor = true;
                            }
                            if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                              parte.partes.forEach(parte =>{
                                if(this.responseIdguia == parseInt(parte.idguiapartes) && this.responseIdItinerario == parseInt(parte.id_itinerario)){
                                  if(!this.lookFor){
                                    this.showBtnDetails(parte);
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
                }
                  if(this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0){
                    element.partes.forEach(partes => {
                      if(!this.thisIsArray(partes.partes)){
                        if(this.thisIsArray(partes.plano) && partes.plano.length > 0){
                          partes.plano.forEach(plano => {
                            let obj = false;  
                            obj = this.lookForTitle(this.response_plano_object, plano.titulo);
                            if(!obj){
                              this.response_plano_object.push({"idguia": partes.idguiapartes, "url_plano": plano.plano, "title": plano.titulo});
                            }
                          });
                        }
                      }else{
                        if(this.thisIsArray(partes.plano) && partes.plano.length > 0){
                          partes.plano.forEach(plano => {
                            let obj = false;  
                            obj = this.lookForTitle(this.response_plano_object, plano.titulo);
                            if(!obj){
                              this.response_plano_object.push({"idguia": partes.id_itinerario, "url_plano": plano.plano, "title": plano.titulo});
                            }
                          });
                        }else{
                          partes.partes.forEach(element => {
                            if(this.thisIsArray(element.plano) && element.plano.length > 0){
                              element.plano.forEach(plano => {
                                let obj = false;  
                                obj = this.lookForTitle(this.response_plano_object, plano.titulo);
                                if(!obj){
                                  this.response_plano_object.push({"idguia": plano.id_guia, "url_plano": plano.plano, "title": plano.titulo});
                                }
                              });
                            }
                          });
                        }
                      }
                    });
                  }

              });
            }
            
            if(this.thisIsArray( this.mydestines.itinerario) &&  this.mydestines.itinerario.length > 0){
              this.mydestines.itinerario.forEach(element =>{
                  if(this.responseIdItinerario == 0){
                    if(this.responseIdguia == element.idguia){
                      if(!this.lookFor){
                        this.showBtnDetails(element);
                      }
                      this.lookFor = true;
                    }
                  }else{
                    if(this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0){
                      element.partes.forEach(parte =>{
                        if(this.responseIdguia == parseInt(parte.idguiapartes) && this.responseIdItinerario == parseInt(parte.id_itinerario)){
                          if(!this.lookFor){
                            this.showBtnDetails(parte);
                          }
                        this.lookFor = true;
                        }
                        if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                          parte.partes.forEach(parte =>{
                            if(this.responseIdguia == parseInt(parte.idguiapartes) && this.responseIdItinerario == parseInt(parte.id_itinerario)){
                              if(!this.lookFor){
                                this.showBtnDetails(parte);
                              }
                              this.lookFor = true;
                            }
                            if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                              parte.partes.forEach(parte =>{
                                if(this.responseIdguia == parseInt(parte.idguiapartes) && this.responseIdItinerario == parseInt(parte.id_itinerario)){
                                  if(!this.lookFor){
                                    this.showBtnDetails(parte);
                                  }
                                  this.lookFor = true;
                                }
                                if(this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0){
                                  parte.partes.forEach(parte =>{
                                    if(this.responseIdguia == parseInt(parte.idguiapartes) && this.responseIdItinerario == parseInt(parte.id_itinerario)){
                                      if(!this.lookFor){
                                        this.showBtnDetails(parte);
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
                
                  if(this.thisIsArray(element.partes) && element.partes.length > 0){
                    element.partes.forEach(nivel1 => {
                      if(this.thisIsArray(nivel1.partes) && nivel1.partes.length > 0){
                        nivel1.partes.forEach(nivel2 => {

                          if(this.thisIsArray(nivel2.partes) && nivel2.partes.length > 0){
                            if(nivel2.plano == null){
                              nivel2.partes.forEach(nivel3 => {
                                if(this.thisIsArray(nivel3.plano) && nivel3.plano.length > 0){
                                  nivel3.plano.forEach(plano => {
                                    let obj = false;  
                                    obj = this.lookForTitle(this.response_plano_object, plano.titulo);
                                    if(!obj){
                                      this.response_plano_object.push({"idguia": nivel3.idguiapartes, "url_plano": plano.plano, "title": plano.titulo});
                                    }
                                  });
                                }
                              });
                            }
                          }

                          if(nivel2.plano != null && nivel2.plano.length > 0){
                              nivel2.plano.forEach(plano => {
                                let obj = false;  
                                obj = this.lookForTitle(this.response_plano_object, plano.titulo);
                                if(!obj){
                                  //this.response_plano_object.push({"idguia": nivel2.id_itinerario, "url_plano": plano.plano, "title": plano.titulo});
                                  this.response_plano_object.push({"idguia": nivel2.idguiapartes, "url_plano": plano.plano, "title": plano.titulo}); 
                                }
                              });
                          }

                        });
                      }
                    });
                  }
                //}

              });
            }

            if(this.response_plano_object != null){
              this.storage.set('planoObject', this.response_plano_object);
            }
          }

        });
      
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
      if(element.detalles != null && element.detalles.length == 0 || element.detalles == null){
        this.elimina({name: 'textos'});
      }
    }
    if(this.thisIsArray(element.infografia) && element.infografia.length == 0 || element.infografia == null){
      this.elimina({name: 'infografias'});
    }
  }


  existCityInSelect(destinos){
    if(this.thisIsArray(destinos.monumento) && destinos.monumento.length > 0){
      destinos.monumento.forEach(element => {
        if(!this.arr_title_header.includes(element.ciudad_guia)){
          this.arr_title_header.push(element.ciudad_guia);
        }
      });
    }
    if(this.thisIsArray(destinos.monumento_comp) && destinos.monumento_comp.length > 0){
      destinos.monumento_comp.forEach(element => {
        if(!this.arr_title_header.includes(element.ciudad_guia)){
          this.arr_title_header.push(element.ciudad_guia);
        }
      });
    }
    if(this.thisIsArray(destinos.dia) && destinos.dia.length > 0){
      destinos.dia.forEach(element => {
        if(!this.arr_title_header.includes(element.ciudad_guia)){
          this.arr_title_header.push(element.ciudad_guia);
        }
      });
    }
    if(this.thisIsArray(destinos.itinerario) && destinos.itinerario.length > 0){
      destinos.itinerario.forEach(element => {
        if(!this.arr_title_header.includes(element.ciudad_guia)){
          this.arr_title_header.push(element.ciudad_guia);
        }
      });
    }

    if(this.arr_title_header.length > 0){
      this.storage.set('existCityInSelect', this.arr_title_header);
    }
  }

  selectCity(city){
    let guia_asoc_mon = false;
    let guia_asoc_monc = false;
    let guia_asoc_day = false;
    let guia_asoc_iti = false;

    this.cont_asoc_mon = 0;
    this.cont_asoc_monc = 0;
    this.cont_asoc_day = 0;
    this.cont_asoc_iti = 0;
    
    if(city != null){
      if(this.mydestines == null){
        this.presentAlert('No dispone de guía asociado a esta ciudad.');
      }else{
        if(this.thisIsArray(this.mydestines.monumento) && this.mydestines.monumento.length > 0){
          this.mydestines.monumento.forEach(element => {
            if(city == element.ciudad_guia){
              this.showSearchCity = false;
              this.title_header = element.ciudad_guia;
              this.storage.set('titleHeader', this.title_header);
              guia_asoc_mon = true;
              this.cont_asoc_mon++;
            }else{
              guia_asoc_mon = false;
            }
          });
        }

        if(this.thisIsArray(this.mydestines.monumento_comp) && this.mydestines.monumento_comp.length > 0){
          this.mydestines.monumento_comp.forEach(element =>{
            if(city == element.ciudad_guia){
              this.showSearchCity = false;
              this.title_header = element.ciudad_guia;
              this.storage.set('titleHeader', this.title_header);
              guia_asoc_monc = true;
              this.cont_asoc_monc++;
            }else{
              guia_asoc_monc = false;
            }
          });
        }

        if(this.mydestines.dia !== undefined){
          if(this.thisIsArray(this.mydestines.dia) && this.mydestines.dia.length > 0){
            this.mydestines.dia.forEach(element =>{
              if(city == element.ciudad_guia){
                this.showSearchCity = false;
                this.title_header = element.ciudad_guia;
                this.storage.set('titleHeader', this.title_header);
                guia_asoc_day = true;
                this.cont_asoc_day++;
              }else{
                guia_asoc_day = false;
              }
            });
          }
        }

        if(this.mydestines.itinerario !== undefined){
          if(this.thisIsArray(this.mydestines.itinerario) && this.mydestines.itinerario.length > 0){
            this.mydestines.itinerario.forEach(element =>{
              if(city == element.ciudad_guia){
                this.showSearchCity = false;
                this.title_header = element.ciudad_guia;
                this.storage.set('titleHeader', this.title_header);
                guia_asoc_iti = true;
                this.cont_asoc_iti++;
              }else{
                guia_asoc_iti = false;
              }
            });
          }
        }
        

        if((guia_asoc_mon == false && this.cont_asoc_mon == 0) && 
           (guia_asoc_monc == false && this.cont_asoc_monc == 0) &&
           (guia_asoc_day == false && this.cont_asoc_day == 0) &&
           (guia_asoc_iti == false && this.cont_asoc_iti == 0)){
            this.presentAlert('No dispone de guía asociado a esta ciudad.');
        }
      }
    }
  }

  onClickListColors(){
    
      this.serviceRegister.getExistCityInSelect()
      .then(res =>{
          if(res != null){
            this.arr_title_header = res;

            setTimeout(() => {
              let buttonElements = document.querySelectorAll('div.alert-radio-group button');
        
              if(!buttonElements.length){
                this.onClickListColors();
              }else{            
                for (let index = 0; index < buttonElements.length; index++) {
                  let buttonElement = buttonElements[index];
                  let optionLabelElement = buttonElement.querySelector('.alert-radio-label');
                  let text = optionLabelElement.innerHTML.trim();
                  
                  if(this.arr_title_header.includes(text)){
                    optionLabelElement.setAttribute('style', 'color: #1F4D9A !important;');
                  }else{
                    optionLabelElement.setAttribute('style', 'color: #D8D8D8 !important;');
                  }
                }
              }
              }, 100);

          }
        })
      .catch(err =>{
          console.log(JSON.stringify(err));
        });
  }

  elimina(elem) {
    this.menu_guia_aux = this.menu_guia_aux.filter(e=> e.name!==elem.name);
  }

  thisIsArray($array){
    return Array.isArray($array) ? true : false;
  }

  onClickToggle(m:any){
    this.mydestines['monumento'][m].open = !this.mydestines['monumento'][m].open;
  }


  onClickShowDay(pos: any){
    let showText = this.showDA.concat(pos);
    let iconRemoveD = this.showDIconRemoveItemsA.concat(pos);
    let iconAddD = this.showDIconAddItemsA.concat(pos);

    if(document.getElementById(showText).style.display == 'none'){
      document.getElementById(showText).style.display = 'block';
      //ICONS
      document.getElementById(iconRemoveD).style.display = 'block';
      document.getElementById(iconAddD).style.display = 'none';
    }else{
      document.getElementById(showText).style.display = 'none';
      //ICONS
      document.getElementById(iconRemoveD).style.display = 'none';
      document.getElementById(iconAddD).style.display = 'block';
    }
  }

  onClickShow(pos:any, tipo: any, aux:any){
    let showText = this.show.concat(pos);
    let showTextIti = this.showI.concat(aux).concat(pos); 
    let showTextMon = this.showM.concat(pos);
    let showTextMonC = this.showMC.concat(pos);
    
    let iconAddMon = this.showMonIconAdd.concat(pos);
    let iconRemoveMon = this.showMonIconRemove.concat(pos);

    let iconAddMonC = this.showMonCIconAdd.concat(pos);
    let iconRemoveMonC = this.showMonCIconRemove.concat(pos);

    let iconRemoveIti = this.showIIconRemove.concat(aux).concat(pos);
    let iconAddIti = this.showIIconAdd.concat(aux).concat(pos);

    let iconRemoveD = this.showDIconRemoveItems.concat(pos);
    let iconAddD = this.showDIconAddItems.concat(pos);

    if(tipo == 'mon'){
      if(document.getElementById(showTextMon).style.display == 'none'){
        document.getElementById(showTextMon).style.display = 'block';
        //ICONS
        document.getElementById(iconRemoveMon).style.display = 'block';
        document.getElementById(iconAddMon).style.display = 'none';
      }else{
        document.getElementById(showTextMon).style.display = 'none';
        //ICONS
        document.getElementById(iconRemoveMon).style.display = 'none';
        document.getElementById(iconAddMon).style.display = 'block';
      }
    }

    if(tipo == 'monc'){
      if(document.getElementById(showTextMonC).style.display == 'none'){
        document.getElementById(showTextMonC).style.display = 'block';
        //ICONS
        document.getElementById(iconRemoveMonC).style.display = 'block';
        document.getElementById(iconAddMonC).style.display = 'none';
      }else{
        document.getElementById(showTextMonC).style.display = 'none';
        //ICONS
        document.getElementById(iconRemoveMonC).style.display = 'none';
        document.getElementById(iconAddMonC).style.display = 'block';
      }
    }

    if(tipo == 'dia'){
      if(document.getElementById(showText).style.display == 'none'){
        document.getElementById(showText).style.display = 'block';
        //ICONS
        document.getElementById(iconRemoveD).style.display = 'block';
        document.getElementById(iconAddD).style.display = 'none';
      }else{
        document.getElementById(showText).style.display = 'none';
        //ICONS
        document.getElementById(iconRemoveD).style.display = 'none';
        document.getElementById(iconAddD).style.display = 'block';
      }
    }

    if(tipo == 'itinerario'){
      if(document.getElementById(showTextIti).style.display == 'none'){
        document.getElementById(showTextIti).style.display = 'block';
        //ICONS
        document.getElementById(iconRemoveIti).style.display = 'block';
        document.getElementById(iconAddIti).style.display = 'none';
        
      }else{
        document.getElementById(showTextIti).style.display = 'none';
        //ICONS
        document.getElementById(iconRemoveIti).style.display = 'none';
        document.getElementById(iconAddIti).style.display = 'block';
      }
    }
  }

  onClickShowItems(pos1:any, pos2:any){
    let showTextItems = this.showIitems.concat(pos1).concat(pos2);
    let iconAddItiItems = this.showIIconAddItems.concat(pos1).concat(pos2);
    let iconRemoveItiItems = this.showIIconRemoveItems.concat(pos1).concat(pos2);

    if(document.getElementById(showTextItems).style.display == 'none'){
      document.getElementById(showTextItems).style.display = 'block';
      //ICONS ITEMS
      document.getElementById(iconRemoveItiItems).style.display = 'block';
      document.getElementById(iconAddItiItems).style.display = 'none'; 

    }else{
      document.getElementById(showTextItems).style.display = 'none';
      //ICONS ITEMS
      document.getElementById(iconRemoveItiItems).style.display = 'none';
      document.getElementById(iconAddItiItems).style.display = 'block';
    }
  }

  onClickShowItemsDay(pos1:any, pos2: any){
    
    let showTextItems = this.showDItems.concat(pos1).concat(pos2);
    let iconAddItiItems = this.showDIconAddItems.concat(pos1).concat(pos2);
    let iconRemoveItiItems = this.showDIconRemoveItems.concat(pos1).concat(pos2);
    

    if(document.getElementById(showTextItems).style.display == 'none'){
      document.getElementById(showTextItems).style.display = 'block';
      //ICONS
      document.getElementById(iconRemoveItiItems).style.display = 'block';
      document.getElementById(iconAddItiItems).style.display = 'none';
    }else{
      document.getElementById(showTextItems).style.display = 'none';
      //ICONS
      document.getElementById(iconRemoveItiItems).style.display = 'none';
      document.getElementById(iconAddItiItems).style.display = 'block';
    }
  }

  onClickShowMon(){
    this.show_mon = !this.show_mon;
  }

  onClickShowIti(pos: any){
    //this.show_iti = !this.show_iti;

    let showText = this.showIA.concat(pos);
    let iconRemoveD = this.showDIconRemoveItemsIA.concat(pos);
    let iconAddD = this.showDIconAddItemsIA.concat(pos);

    if(document.getElementById(showText).style.display == 'none'){
      document.getElementById(showText).style.display = 'block';
      //ICONS
      document.getElementById(iconRemoveD).style.display = 'block';
      document.getElementById(iconAddD).style.display = 'none';
    }else{
      document.getElementById(showText).style.display = 'none';
      //ICONS
      document.getElementById(iconRemoveD).style.display = 'none';
      document.getElementById(iconAddD).style.display = 'block';
    }
  }

  async presentAlert(msg) {
    const alert = await this.alertCtrl.create({
      //cssClass: 'my-custom-class',
      header: 'Alert',
      message: msg,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  //REPRODUCTOR
  onClickPlayMp3(item :any, itinerario : Number, tipoAudio : any, urlimg: any){
    let fn = item.id_audio;
    let idGuia = null;
    let idGuiaPartes = null;
    let idGuiaItinerario = null;

    this.modoAudio = 'pause';

    if(item != null){
      this.storage.set('playAudio', fn);
      this.storage.set('tipoAudio', tipoAudio);
      this.storage.set('titleAudio', item.title);
      this.storage.set('modoAudio', this.modoAudio);

      idGuia = item.id_guia;
      idGuiaPartes = null;
      idGuiaItinerario = itinerario;

      if(this.mydestines != null){
        this.listAudioExist(this.mydestines, null, urlimg);
      }
      console.log('1'+this.audioExist);

      this.storageMonument(idGuia, idGuiaPartes, idGuiaItinerario, this.audioExist);
      this.router.navigate(['/tabs/mis-destinos/'+ idGuia +'/'+ idGuiaItinerario]);
    }
  }

  onClickPlayMp3Partes(idguia: any, partes: any, item: any, tipoAudio : any, urlimg: any){
    let fn = item.id_audio;
    let idGuia = null;
    let idGuiaPartes = null;
    let idGuiaItinerario = null;

    this.modoAudio = 'pause';

    if(partes != null){
      this.storage.set('playAudio', fn);
      this.storage.set('tipoAudio', tipoAudio);
      this.storage.set('titleAudio', item.title);
      this.storage.set('modoAudio', this.modoAudio);

      idGuia = idguia;
      idGuiaPartes = partes.idguiapartes;
      idGuiaItinerario = partes.id_itinerario;

      if(this.mydestines != null){
        this.listAudioExist(this.mydestines, null, urlimg);
      }
      console.log(this.audioExist);
      this.storageMonument(idGuia, idGuiaPartes, idGuiaItinerario, this.audioExist);
      
      if(tipoAudio == 3){
        this.router.navigate(['/tabs/mis-destinos/'+ idGuiaItinerario+'/'+idGuiaPartes]);
      }else{
        this.router.navigate(['/tabs/mis-destinos/'+ idGuiaPartes+'/'+ idGuiaItinerario]);
      }
    }
  }

  storageMonument(idGuia: Number, idGuiaPartes: Number, idGuiaItinerario: Number, audioExist: ListAudioExist[]){

    
    let guia = null;

    if(idGuiaPartes == null){
      guia = idGuia;   
    }else{
      guia = idGuiaPartes;
    }


    this.serviceRegister.getMonSee()
    .then(res =>{
      if(res != null){
        this.list_view_audio_init = res;
        this.addElementToListSee(audioExist, guia, idGuiaItinerario);
      }else{
        this.addElementToListSee(audioExist, guia, idGuiaItinerario);
      }
    }); 
  }

  addElementToListSee(audioExist: ListAudioExist[], guia, idGuiaItinerario){

    let view_audio_init = null;

    audioExist.forEach(audio =>{
      
      let existe = false;
      if(audio.idguia == guia && audio.iditinerario == idGuiaItinerario){
        this.list_view_audio_init.forEach(element =>{ 
          if(guia == element.idguia && idGuiaItinerario == element.iditinerario){
            existe = true;
          }
        });

        if(!existe){
          view_audio_init = new IListAudioExist();
          view_audio_init.title = audio.title;
          view_audio_init.idguia = audio.idguia;
          view_audio_init.iditinerario = audio.iditinerario;
          view_audio_init.url = audio.url;
          view_audio_init.tipo = audio.tipo;
          view_audio_init.imgthumb = audio.imgthumb;
        }
      }

      if(view_audio_init != null){
        this.list_view_audio_init.push(view_audio_init);
        view_audio_init = null;
        this.storage.set('monumentSee', this.list_view_audio_init);
      }

    });
  }

  onClickAnterior(destino: any, idguia: Number, iditinerario: Number, tipo: any, url: any){
    
    let encontradopos = null;
    let audioIdGuia = null;
    let audioIdIti = null;

    let cont = 0;

    this.onSeekState = this.state.playing;
    if(this.onSeekState){
      this.audioProvider.pause();
      this.showPause = false;
    }

    //LISTA DE AUDIO EXISTENTES
    this.listAudioExist(destino, tipo, url);

    //AUDIO A REPRODUCIR
    if(this.audioExist.length > 0){

      this.audioExist.forEach(audio => {
        if(idguia == audio.idguia && iditinerario == audio.iditinerario){
          encontradopos = cont;
        }
        cont++;
      });
    }

    if(encontradopos != null){
      if(encontradopos == 0){
          audioIdGuia = this.audioExist[this.audioExist.length-1].idguia;
          audioIdIti = this.audioExist[this.audioExist.length-1].iditinerario;
          this.storage.set('playAudio', this.audioExist[this.audioExist.length-1].url);
          this.storage.set('titleAudio', this.audioExist[this.audioExist.length-1].title);
          this.storage.set('tipoAudio', this.audioExist[this.audioExist.length-1].tipo);
      }else{
          audioIdGuia = this.audioExist[encontradopos-1].idguia;
          audioIdIti = this.audioExist[encontradopos-1].iditinerario;
          this.storage.set('playAudio', this.audioExist[encontradopos-1].url);
          this.storage.set('titleAudio', this.audioExist[encontradopos-1].title);
          this.storage.set('tipoAudio', this.audioExist[encontradopos-1].tipo);
      }
      
      this.router.navigate(['/tabs/mis-destinos/'.concat(audioIdGuia.toString()).concat('/').concat(audioIdIti.toString())]);
    }
    
  }

  onClickRetroceso(){
    this.onSeekState = this.state.playing;
    if (this.onSeekState && this.seekbarCount >= 10) {
      this.audioProvider.seekTo(this.seekbarCount - 10);
    }
  }

  resetState() {
    this.audioProvider.stop();
    this.store.dispatch({ type: RESET });
  }

  playStream(url) {
    this.resetState();
    this.audioProvider.playStream(url).subscribe(event => {
      const audioObj = event.target;
      
      switch (event.type) {
        case 'canplay':
            return this.store.dispatch({ type: CANPLAY, payload: { value: true } });
        case 'loadedmetadata':
          return this.store.dispatch({
            type: LOADEDMETADATA,
            payload: {
              value: true,
              data: {
                time: this.audioProvider.formatTime(
                  audioObj.duration * 1000,
                  'HH:mm:ss'
                ),
                timeSec: audioObj.duration,
                mediaType: 'mp3'
              }
            }
          });

        case 'playing':
          return this.store.dispatch({ type: PLAYING, payload: { value: true } });

        case 'pause':
          return this.store.dispatch({ type: PLAYING, payload: { value: false } });

        case 'timeupdate':
          return this.store.dispatch({
            type: TIMEUPDATE,
            payload: {
              timeSec: audioObj.currentTime,
              time: this.audioProvider.formatTime(
                audioObj.currentTime * 1000,
                'HH:mm:ss'
              )
            }
          });

        case 'loadstart':
          return this.store.dispatch({ type: LOADSTART, payload: { value: true } });
      }
    });
  }

  pause() {

    this.modoAudio = 'pause';
    this.storage.set('modoAudio', this.modoAudio); 

    this.onSeekState = this.state.playing;
    if(this.onSeekState){
      this.audioProvider.pause();
      console.log('Pause');
      this.showPause = false;
    }

  }

  play() {

    this.modoAudio = 'reproduciendo';
    this.storage.set('modoAudio', this.modoAudio);
    
    
    this.audioProvider.play();
    this.showPause = true;
    console.log('Play');
      
  }

  reset() {
    this.resetState();
    this.currentFile = {};
  }

  onClickAvance(){
    this.onSeekState = this.state.playing;
    if (this.onSeekState && this.seekbarCount < this.state.durationSec - 10) {
      this.audioProvider.seekTo(this.seekbarCount + 10);
    }
  }

  onClickSiguiente(destino: any, idguia: Number, iditinerario: Number, tipo: string, urlimg: any){
    
    let encontradopos = null;
    let audioIdGuia = null;
    let audioIdIti = null;

    let cont = 0;

    this.onSeekState = this.state.playing;
    if(this.onSeekState){
      this.audioProvider.pause();
      this.showPause = false;
    }
    
    //LISTA DE AUDIO EXISTENTES
    this.listAudioExist(destino, tipo, urlimg);
    if(this.audioExist.length > 0){
      this.audioExist.forEach(audio => {
        if(idguia == audio.idguia && iditinerario == audio.iditinerario){
          encontradopos = cont;
        }
        cont++;
      });
    }

    if(encontradopos != null){
      if(this.audioExist.length-1 >= encontradopos + 1){
          audioIdGuia = this.audioExist[encontradopos+1].idguia;
          audioIdIti = this.audioExist[encontradopos+1].iditinerario;
          this.storage.set('playAudio', this.audioExist[encontradopos+1].url);
          this.storage.set('titleAudio', this.audioExist[encontradopos+1].title);
          this.storage.set('tipoAudio', this.audioExist[encontradopos+1].tipo);
      }else{
          audioIdGuia = this.audioExist[0].idguia;
          audioIdIti = this.audioExist[0].iditinerario;
          this.storage.set('playAudio', this.audioExist[0].url);
          this.storage.set('titleAudio', this.audioExist[0].title);
          this.storage.set('tipoAudio', this.audioExist[0].tipo);
      }
      
      this.router.navigate(['/tabs/mis-destinos/'.concat(audioIdGuia.toString()).concat('/').concat(audioIdIti.toString())]);
    }

    
  }

  getObservableAudio(url: any){
    this.serviceRegister.present('Preparando audio..');
    this.audioProvider.getAudio(url).subscribe(res =>{
      if(res!=null){
        this.playStream(res);
        this.serviceRegister.dismiss();
      }
    });
  }

  buscarImgInListAudio(audioExist: ListAudioExist[], url){
    if(audioExist != null && audioExist.length > 0){
      audioExist.forEach(audio =>{
        if(audio.imgthumb === url){
          return true;
        }
      })
    }
    return false;
  }

  listAudioExist(destino: any, tipo: any, urlimg: any){

    this.audioExist = [];

      if(this.thisIsArray(destino.monumento) && destino.monumento.length > 0){
        destino.monumento.forEach(monument => {
          if(this.thisIsArray(monument.audio) && monument.audio.length > 0){
            monument.audio.forEach(element => { 
              /*
              if(!this.buscarImgInListAudio(this.audioExist, urlimg)){
                this.audioExist.push({"title": element.title, "idguia": element.id_guia, "iditinerario": 0, "url": element.id_audio, "tipo": 3, "imgthumb": urlimg});
              }else{
                this.audioExist.push({"title": element.title, "idguia": element.id_guia, "iditinerario": 0, "url": element.id_audio, "tipo": 3, "imgthumb": null});
              }
              */
              this.audioExist.push({"title": element.title, "idguia": element.id_guia, "iditinerario": 0, "url": element.id_audio, "tipo": 3, "imgthumb": urlimg});
            });
          }
          if(this.thisIsArray(monument.partes) && monument.partes.length > 0){
            monument.partes.forEach(parte =>{
              if(this.thisIsArray(parte.audio) && parte.audio.length > 0){
                parte.audio.forEach(audio => {
                  //this.audioExist.push({"title": audio.title, "idguia": parte.id_itinerario, "iditinerario": audio.id_guia, "url": audio.id_audio, "tipo": 3, "imgthumb": urlimg});
                  this.audioExist.push({"title": audio.title, "idguia": parte.id_itinerario, "iditinerario": parte.idguiapartes, "url": audio.id_audio, "tipo": 3, "imgthumb": urlimg});
                });
              }
            });
          }
        });
      }
    
      if(this.thisIsArray(destino.monumento_comp) && destino.monumento_comp.length > 0){
        destino.monumento_comp.forEach(monument =>{
          if(this.thisIsArray(monument.audio) && monument.audio.length > 0){
            if(monument.idguia === undefined){
              monument.audio.forEach(element => {
                this.audioExist.push({"title": element.title, "idguia": monument.idguiapartes, "iditinerario": element.id_guia, "url": element.id_audio, "tipo": 4, "imgthumb": urlimg});
              });
            }else{
              monument.audio.forEach(element => {
                this.audioExist.push({"title": element.title, "idguia": element.id_guia, "iditinerario": 0, "url": element.id_audio, "tipo": 4, "imgthumb": urlimg});
              });
            }
          }  
          if(this.thisIsArray(monument.partes) && monument.partes.length > 0){
            monument.partes.forEach(parte => {
              if(this.thisIsArray(parte.audio) && parte.audio.length > 0){
                parte.audio.forEach(audio =>{
                  this.audioExist.push({"title": audio.title, "idguia": parte.idguiapartes, "iditinerario": parte.id_itinerario, "url": audio.id_audio, "tipo": 4, "imgthumb": urlimg});
                });
              }
              if(this.thisIsArray(parte.partes) && parte.partes.length > 0){
                parte.partes.forEach(parte => {
                  if(this.thisIsArray(parte.audio) && parte.audio.length > 0){
                    parte.audio.forEach(audio => {
                      this.audioExist.push({"title": audio.title, "idguia": parte.idguiapartes, "iditinerario": audio.id_guia, "url": audio.id_audio, "tipo": 4, "imgthumb": urlimg});
                    });
                  }
                });
              }
            });
          }
          

        })
      }

      if(this.thisIsArray(destino.dia) && destino.dia.length > 0){
        destino.dia.forEach(monumento => {
          if(this.thisIsArray(monumento.audio) && monumento.audio.length > 0){
            monumento.audio.forEach(audio => {
              this.audioExist.push({"title": audio.title, "idguia": audio.id_guia, "iditinerario": 0, "url": audio.id_audio, "tipo": 2, "imgthumb": urlimg});
            });
          }
          if(this.thisIsArray(monumento.partes) && monumento.partes.length > 0){
            monumento.partes.forEach(parte => {
              if(this.thisIsArray(parte.audio) && parte.audio.length > 0){
                parte.audio.forEach(audio => {
                  this.audioExist.push({"title": audio.title, "idguia": parte.idguiapartes, "iditinerario": audio.id_guia, "url": audio.id_audio, "tipo": 2, "imgthumb": urlimg});
                });
              }
              if(this.thisIsArray(parte.partes) && parte.partes.length > 0){
                parte.partes.forEach(parte => {
                  if(this.thisIsArray(parte.audio) && parte.audio.length > 0){
                    parte.audio.forEach(audio =>{
                      this.audioExist.push({"title": audio.title, "idguia": parte.idguiapartes, "iditinerario": parte.id_itinerario, "url": audio.id_audio, "tipo": 2, "imgthumb": urlimg});
                    });
                  }
                  if(this.thisIsArray(parte.partes) && parte.partes.length > 0){
                    parte.partes.forEach(parte =>{
                      if(this.thisIsArray(parte.audio) && parte.audio.length > 0){
                        parte.audio.forEach(audio => {
                          this.audioExist.push({"title": audio.title, "idguia": parte.idguiapartes, "iditinerario": audio.id_guia, "url": audio.id_audio, "tipo": 2, "imgthumb": urlimg});
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }

      if(this.thisIsArray(destino.itinerario) && destino.itinerario.length > 0){
        destino.itinerario.forEach(monumento =>{
          if(this.thisIsArray(monumento.audio) && monumento.audio.length > 0){
            monumento.audio.forEach(audio =>{
              this.audioExist.push({"title": audio.title, "idguia": audio.id_guia, "iditinerario": 0, "url": audio.id_audio, "tipo": 1, "imgthumb": urlimg});
            });
          }
          if(this.thisIsArray(monumento.partes) && monumento.partes.length > 0){
            monumento.partes.forEach(parte => {
              if(this.thisIsArray(parte.audio) && parte.audio.length > 0){
                parte.audio.forEach(audio => {
                  this.audioExist.push({"title": audio.title, "idguia": parte.idguiapartes, "iditinerario": parte.id_itinerario, "url": audio.id_audio, "tipo": 1, "imgthumb": urlimg});
                });
              }
              if(this.thisIsArray(parte.partes) && parte.partes.length > 0){
                parte.partes.forEach(parte => {
                  if(this.thisIsArray(parte.audio) && parte.audio.length > 0){
                    parte.audio.forEach(audio => {
                      this.audioExist.push({"title": audio.title, "idguia": parte.idguiapartes, "iditinerario": parte.id_itinerario, "url": audio.id_audio, "tipo": 1, "imgthumb": urlimg});
                    });
                  }
                  if(this.thisIsArray(parte.partes) && parte.partes.length > 0){
                    parte.partes.forEach(parte => {
                      if(this.thisIsArray(parte.audio) && parte.audio.length > 0){
                        parte.audio.forEach(audio => {
                          this.audioExist.push({"title": audio.title, "idguia": parte.idguiapartes, "iditinerario": parte.id_itinerario, "url": audio.id_audio, "tipo": 1, "imgthumb": urlimg});
                        });
                      }
                      if(this.thisIsArray(parte.partes) && parte.partes.length > 0){
                        parte.partes.forEach(parte => {
                          if(this.thisIsArray(parte.audio) && parte.audio.length > 0){
                            parte.audio.forEach(audio =>{
                              this.audioExist.push({"title": audio.title, "idguia": parte.idguiapartes, "iditinerario": parte.id_itinerario, "url": audio.id_audio, "tipo": 1, "imgthumb": urlimg});
                            })
                          }
                        });
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

  clickedStar(){
    
    let showBackMisDestinos = true;
  

    if(this.responseIdguia != null && this.responseIdItinerario != null){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(showBackMisDestinos)
        }
      };
      this.router.navigate(['/tabs/mis-destinos'], navigationExtras);
    }else{
      if(!this.showSearchCity){
        showBackMisDestinos = false;
        let navigationExtrasSearch: NavigationExtras = {
          queryParams: {
            special: JSON.stringify(showBackMisDestinos)
          }
        };

        if(this.router['routerState'].snapshot.url.includes('special=false')){
          this.navCtrl.navigateForward("/tabs/mis-destinos");
          this.clickAudio = false;
          this.showSearchCity = true;  
        }else{
          this.router.navigate(['/tabs/mis-destinos'], navigationExtrasSearch);
        }

      }else{
        this.router.navigate(['/tabs/inicio']);
      }
    }


    if(this.state != null){
      this.onSeekState = this.state.playing;
      if(this.onSeekState){
        this.audioProvider.pause();
      }
    }
  }

}
