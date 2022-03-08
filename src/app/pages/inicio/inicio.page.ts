import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../service/user-data.service';
import { ListAudioExist } from '../../interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

/*
@Pipe({ 
  name: 'objngfor'
})
*/

export class InicioPage implements OnInit {

  arr_mon_see: ListAudioExist[] = [];
  mydestines: any = null; 

  constructor(private serviceRegister: UserDataService,
              private iab: InAppBrowser ) { }

  ngOnInit() {
  }


  ionViewWillEnter(){
    //this.getCargaVistos();  
  }


  getCargaVistos(){

    //this.serviceRegister.present('Audioguias vistas..');
    this.serviceRegister.getAllData()
    .then(res =>{
      if(res != null){
        this.mydestines = res;
        this.serviceRegister.getMonSee()
        .then(res =>{
          if(res != null){
            this.arr_mon_see = res;
            //this.serviceRegister.dismiss();
          }
        });
        
      }else{
        this.serviceRegister.dismiss();
      }
    })
    .catch(err =>{
      console.log('Error al extraer los monumentos');
      this.serviceRegister.dismiss();
    });
  }

  productBuy(){
    this.iab.create('https://www.destinoarte.com/audioguias-culturales/', '_system').show();
  }
}
