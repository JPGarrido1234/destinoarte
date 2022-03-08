import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDataService } from '../../service/user-data.service';
import { AlertController } from '@ionic/angular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.page.html',
  styleUrls: ['./forget-pass.page.scss'],
})
export class ForgetPassPage implements OnInit {

  forgetUserPass = {
    email: '',
    pass: '',
    repeatPass: ''
  }

  resetUser = {
    password: '',
    codigo: ''
  }

  showResetPass = null;
  email = null;


  constructor(private serviceForgetPass: UserDataService,
              private alertCtrl: AlertController,
              private router: Router) { }

  ngOnInit() {
    this.showResetPass = true;
  }

  onSubmit(formulario: NgForm){
    this.email = formulario.form.value.email;
    this.serviceForgetPass.present('Validando formulario..');
    this.serviceForgetPass.postResetUserPassword(this.email)
    .then(res =>{
      if(res != null){
        let data = JSON.parse(res.data);
        this.serviceForgetPass.dismiss();
        this.showResetPass = false;      
      }
    })
    .catch(err =>{
      if(err != null){
        console.log(JSON.parse(err.data));
        this.serviceForgetPass.dismiss();
        this.showResetPass = true;
      }
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

  onSubmitBis(myform: NgForm){
    let pass = myform.form.value.password;
    let codigo = myform.form.value.codigo;

    this.serviceForgetPass.postUserSetPassword(this.email, pass, codigo)
    .then(res => {
      if(res != null){
        console.log(res.data);
        this.router.navigate(['/inicio-sesion']);
      }
    })
    .catch(err =>{
      if(err != null){
        console.log(JSON.parse(err.data));
      }
    })
  }

}
