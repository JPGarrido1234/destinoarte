import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../service/user-data.service';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.page.html',
  styleUrls: ['./mi-cuenta.page.scss'],
})
export class MiCuentaPage implements OnInit {

  userId:any = null;
  response:any = null;

  constructor(private router: Router, private serviceRegister: UserDataService) { }

  ngOnInit() {

    if(this.userId == null){
      this.serviceRegister.present('Cargando datos usuario');
      this.serviceRegister.getUserId()
      .then(data =>{
        this.userId = data;
        this.serviceRegister.getDataUser(this.userId)
        .then(datauser => {
          this.serviceRegister.dismiss();
          this.response = JSON.parse(datauser.data)[0];
          console.log(JSON.parse(datauser.data)[0]);
        })
        .catch(error =>{
          this.serviceRegister.dismiss();
          console.log('Error al obtener los datos');
        })
      })
      .catch(error =>{
        this.serviceRegister.dismiss();
        console.log('Error de conexión');
      })
    }

  }


  clickedStar(){
    this.router.navigate(['/tabs/inicio']);
  }
}

