import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDataService } from '../../service/user-data.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
})
export class RegistrarUsuarioPage implements OnInit {


  registerUser = {
    nameSurname: '',
    username: '',
    email: '',
    conf_email: '',
    pass: '',
    check: false
  };


  constructor(public alertCtrl: AlertController, private serviceRegister: UserDataService, private router: Router) { }

  ngOnInit() {
    
  }

  onSubmit(formulario: NgForm){

    this.serviceRegister.present('Validando formulario..');
    this.serviceRegister.postUserToken()

    .then(data =>{

      this.serviceRegister.dismiss();
      this.serviceRegister.present('Registrando usuario..');
      let response = JSON.parse(data.data);

      this.serviceRegister.postUserRegister(formulario, response)
      .then(data =>{
        this.serviceRegister.dismiss();
        this.router.navigate(['inicio-sesion'])
      })
      .catch(error =>{
        this.serviceRegister.dismiss();
        let msg = JSON.parse(error.error);
        this.presentAlert(msg.message);
      })  
    })
    .catch(error =>{
      this.serviceRegister.dismiss();
      let msg = JSON.parse(error.error);
      this.presentAlert(msg.message);
    });
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

}
