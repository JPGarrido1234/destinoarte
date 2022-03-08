import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { UserDataService } from '../../service/user-data.service';
import { Storage } from '@ionic/storage';
import { ListAudioExist } from '../../interfaces/interfaces';

@Injectable()
export class CloudProvider {
  listaudio: any;
  mydestines: any = null;
  audioExist: ListAudioExist[] = [];
  userId: any = null;
  /*
  files:any = [
    { url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',
      name: 'Perfect by Ed Sheeran'
    },
    {
      url: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
      name: 'Man Atkeya Beparwah by Nusrat Fateh Ali Khan'
    },
    { url: 'https://ia801503.us.archive.org/15/items/TheBeatlesPennyLane_201805/The%20Beatles%20-%20Penny%20Lane.mp3',
      name: 'Penny Lane by The Beatles'
    }
  ];
  */
  constructor(private serviceRegister: UserDataService, 
              private storage: Storage){
  }

 async getListAudioExist(){

  let des = null;
  let resAudios = null;

  this.storage.get('IDUser')
  .then(user =>{
    if(user != null){
      this.userId = user;
      this.serviceRegister.getDataMyDestines(this.userId)
      .then(destinos =>{
        if(destinos != null){
          des = JSON.parse(destinos.data)
          this.orderItinerario(des.itinerario);
          this.orderDay(des.dia);
          this.orderMonumentComp(des.monumento_comp);                   

          this.mydestines = des;
          //this.listAudioExist(this.mydestines)
          //.then(res =>{
          //  if(res != null){
              //this.audioExist = res;
          //    resAudios = res;
          //     return resAudios;
          //   }
          //});

        }
      });
    }
  });
}

 /*

  async listAudioExist(destino: any){

  let auxpos = 0;
  let audioExist: ListAudioExist[] = [];

    if(this.thisIsArray(destino.monumento) && destino.monumento.length > 0){
      destino.monumento.forEach(monument => {
        if(this.thisIsArray(monument.audio) && monument.audio.length > 0){
          monument.audio.forEach(element => { 
            audioExist.push({"title": element.title, "idguia": element.id_guia, "iditinerario": 0, "url": element.id_audio});
            auxpos++;
          });
        }
        if(this.thisIsArray(monument.partes) && monument.partes.length > 0){
          monument.partes.forEach(parte =>{
            if(this.thisIsArray(parte.audio) && parte.audio.length > 0){
              parte.audio.forEach(audio => {
                audioExist.push({"title": audio.title, "idguia": parte.idguiapartes, "iditinerario": audio.id_guia, "url": audio.id_audio});
                auxpos++;
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
              audioExist.push({"title": element.title, "idguia": monument.idguiapartes, "iditinerario": element.id_guia, "url": element.id_audio});
              auxpos++;
            });
          }else{
            monument.audio.forEach(element => {
              audioExist.push({"title": element.title, "idguia": element.id_guia, "iditinerario": 0, "url": element.id_audio});
              auxpos++;
            });
          }
        }  
        if(this.thisIsArray(monument.partes) && monument.partes.length > 0){
          monument.partes.forEach(parte => {
            if(this.thisIsArray(parte.audio) && parte.audio.length > 0){
              parte.audio.forEach(audio =>{
                audioExist.push({"title": audio.title, "idguia": parte.idguiapartes, "iditinerario": audio.id_guia, "url": audio.id_audi});
                auxpos++;
              });
            }
            if(this.thisIsArray(parte.partes) && parte.partes.length > 0){
              parte.partes.forEach(parte => {
                if(this.thisIsArray(parte.audio) && parte.audio.length > 0){
                  parte.audio.forEach(audio => {
                    audioExist.push({"title": audio.title, "idguia": parte.idguiapartes, "iditinerario": audio.id_guia, "url": audio.id_audio});
                    auxpos++;
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
            audioExist.push({"title": audio.title, "idguia": audio.id_guia, "iditinerario": 0, "url": audio.id_audio});
            auxpos++;
          });
        }
        if(this.thisIsArray(monumento.partes) && monumento.partes.length > 0){
          monumento.partes.forEach(parte => {
            if(this.thisIsArray(parte.audio) && parte.audio.length > 0){
              parte.audio.forEach(audio => {
                audioExist.push({"title": audio.title, "idguia": parte.idguiapartes, "iditinerario": audio.id_guia, "url": audio.id_audio});
                auxpos++;
              });
            }
            if(this.thisIsArray(parte.partes) && parte.partes.length > 0){
              parte.partes.forEach(parte => {
                if(this.thisIsArray(parte.audio) && parte.audio.length > 0){
                  parte.audio.forEach(audio =>{
                    audioExist.push({"title": audio.title, "idguia": parte.idguiapartes, "iditinerario": audio.id_guia, "url": audio.id_audio});
                    auxpos;
                  });
                }
                if(this.thisIsArray(parte.partes) && parte.partes.length > 0){
                  parte.partes.forEach(parte =>{
                    if(this.thisIsArray(parte.audio) && parte.audio.length > 0){
                      parte.audio.forEach(audio => {
                        audioExist.push({"title": audio.title, "idguia": parte.idguiapartes, "iditinerario": audio.id_guia, "url": audio.id_audio});
                        auxpos++;
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
            this.audioExist.push({"title": audio.title, "idguia": audio.id_guia, "iditinerario": 0, "url": audio.id_audio});
            auxpos++;
          });
        }
        if(this.thisIsArray(monumento.partes) && monumento.partes.length > 0){
          monumento.partes.forEach(parte => {
            if(this.thisIsArray(parte.audio) && parte.audio.length > 0){
              parte.audio.forEach(audio => {
                this.audioExist.push({"title": audio.title, "idguia": parte.idguiapartes, "iditinerario": audio.id_guia, "url": audio.id_audio});
                auxpos++;
              });
            }
            if(this.thisIsArray(parte.partes) && parte.partes.length > 0){
              parte.partes.forEach(parte => {
                if(this.thisIsArray(parte.audio) && parte.audio.length > 0){
                  parte.audio.forEach(audio => {
                    this.audioExist.push({"title": audio.title, "idguia": parte.idguiapartes, "iditinerario": audio.id_guia, "url": audio.id_audio});
                    auxpos++;
                  });
                }
                if(this.thisIsArray(parte.partes) && parte.partes.length > 0){
                  parte.partes.forEach(parte => {
                    if(this.thisIsArray(parte.audio) && parte.audio.length > 0){
                      parte.audio.forEach(audio => {
                        this.audioExist.push({"title": audio.title, "idguia": parte.idguiapartes, "iditinerario": audio.id_guia, "url": audio.id_audio});
                        auxpos++;
                      });
                    }
                    if(this.thisIsArray(parte.partes) && parte.partes.length > 0){
                      parte.partes.forEach(parte => {
                        if(this.thisIsArray(parte.audio) && parte.audio.length > 0){
                          parte.audio.forEach(audio =>{
                            this.audioExist.push({"title": audio.title, "idguia": parte.idguiapartes, "iditinerario": audio.id_guia, "url": audio.id_audio});
                            auxpos++;
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

    return audioExist;
  
  }
*/
  orderItinerario(res: any){

    if(this.thisIsArray(res) && res.length > 0){
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
      //console.log(JSON.parse(res.itinerario));
    }
  }

  orderDay(res: any){
    if(this.thisIsArray(res) && res.length > 0){
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

  getAudio(): Observable<any> {

    let audios = null;

    this.getListAudioExist().then(res=>{
      audios = res;
    });

    return of(audios);  
    
  }

  thisIsArray($array){
    return Array.isArray($array) ? true : false;
  }
}
