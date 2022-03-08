import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { UserDataService } from '../../service/user-data.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})

@Injectable({
  providedIn: 'root'
})
export class InicioSesionPage implements OnInit {
  idUser;
  response :Promise<any>;

  usuario = {
    //email: '',
    //password: ''
    email: 'empresitanosotras@gmail.com',
    password: '19511965empre'
  }

  isLoggedIn = false;
  users = { id: '', name: '', email: '', picture: { data: { url: '' } } };

  constructor(private serviceRegister: UserDataService, public alertCtrl: AlertController, private router: Router, private storage: Storage) {
  /*
    fb.getLoginStatus()
    .then(res => {

      console.log(res.status);
      if (res.status === 'connect') {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }

    })
    .catch(e => console.log(e));
  */
  }

  ngOnInit(){
  }

  onSubmit(formulario: NgForm){ 

   this.serviceRegister.present('Validando datos..');
   this.response = this.serviceRegister.postLoginToken(formulario); 

   this.response
   .then(data => {
      let res = JSON.parse(data.data);
      this.serviceRegister.dismiss();
      if(res.token != null || res.token != undefined){ 
        this.storage.set('IDUser', res.user_ID);
        this.storage.remove('existCityInSelect');
        this.storage.remove('mydestines');  
        
        this.router.navigate(['tabs/inicio']);
        
      }else{
        this.presentAlert('Error al introducir los datos.');
      }        
    })
   .catch(error => {
     this.serviceRegister.dismiss();
     if(error.error != null){
       this.presentAlert('Error de conexi�n.');
     }
    });
  }


  //Facebook
  /*
  fbLogin() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if (res.status === 'connected') {
          this.isLoggedIn = true;
          this.getUserDetail(res.authResponse.userID);
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  getUserDetail(userid: any) {
    this.fb.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
      .then(res => {
        console.log(res);
        this.users = res;
      })
      .catch(e => {
        console.log(e);
      });
  }

  logout() {
    this.fb.logout()
      .then( res => this.isLoggedIn = false)
      .catch(e => console.log('Error logout from Facebook', e));
  }
  */

  async presentAlert(msg) {
    const alert = await this.alertCtrl.create({
      //cssClass: 'my-custom-class',
      header: 'Alert',
      message: msg,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

}