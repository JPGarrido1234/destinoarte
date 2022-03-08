import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../../service/user-data.service';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss']
})
export class BuscarPage implements OnInit {

  textoBuscar = '';
  all_itinerarios : any[] = null;
  data = null;
  response = null;
  btnColor = null;
  btnText = null;
  btnActivo = null;
  btnLink = null;
  description = null;
  userId: any = null;

  showSearch = null;

  my_destines: any = null;

  list_disponibles: any[] = [];
  isLoading = false;
  productBuy = false;

  constructor(private router: Router, 
              private serviceRegister: UserDataService, 
              private route: ActivatedRoute, 
              private storage: Storage, 
              private iab: InAppBrowser) { }

  ngOnInit() {

    if (this.route.snapshot.data['special']) {
      this.data = this.route.snapshot.data['special'];
      if(this.data != null){
        this.showSearch = false;
        this.serviceRegister.present('Carga datos..');
        this.serviceRegister.getUserId()
        .then(user =>{
          if(user != null){
            this.serviceRegister.getAllData()
            .then(destinos => {
              if(destinos != null){
                this.my_destines = destinos;  
                if(this.all_itinerarios == null || this.all_itinerarios.length == 0){ 
                  this.getListGuiasCompradas(this.my_destines);
                  this.getAllItinerario(user);
                  this.response = JSON.parse(this.data.data)[0];
                  if(this.list_disponibles.includes(Number(this.response.id))){
                    this.btnColor = 'btnGris';
                    this.description = 'Actualmente tienes comprado el producto';
                    this.btnActivo = true;
                    this.btnText = 'COMPRADO';
                  }else{
                    this.btnColor = 'btnAzul';
                    this.description = 'Actualmente no tienes comprado el producto';
                    this.btnActivo = false;
                    this.btnText = 'COMPRAR';
                  }
                  this.serviceRegister.dismiss();
                }
              }
            });
          }
        })
        
      }
    }else{
      this.showSearch = true;
      if(this.userId == null){
        this.serviceRegister.present('Listado de guías..');
        this.serviceRegister.getUserId()
        .then(data => {
          this.userId = data;
          this.getAllDataUserColor(this.userId);
          this.serviceRegister.dismiss();
        })
        .catch(error => {
          console.log('Error al obtener el usuario');
        });
      }else{
        this.getAllDataUserColor(this.userId);
      }

    }
  }

  buscar(event){
    this.showSearch = true;
    this.textoBuscar = event.detail.value;
    
    if(this.userId != null){
      this.getAllDataUserColor(this.userId);
    } 

  }

  clickedStar(){
    this.router.navigate(['/tabs/inicio']);
  }

  getAllDataUserColor(userID: any){


      this.serviceRegister.getAllData()
      .then(res => {
        if(res != null){
          this.my_destines = res;  
          
          if(this.all_itinerarios == null || this.all_itinerarios.length == 0){ 
            this.getListGuiasCompradas(this.my_destines);
            this.getAllItinerario(userID);
          }
        }else{
          this.serviceRegister.present('Cargando datos..');
          this.serviceRegister.getDataMyDestines(userID)
          .then(data => {
            if(data != null){
              this.my_destines = JSON.parse(data.data);
              if(this.all_itinerarios == null || this.all_itinerarios.length == 0){ 
                this.getListGuiasCompradas(this.my_destines);
                this.getAllItinerario(userID);
              }
  
              this.storage.set('mydestines', this.my_destines);
              this.serviceRegister.dismiss();
            }
          })
          .catch(error => {console.log('Error al obtener los datos.');})
        }

      });
  }

  getAllItinerario(userID: any){
    
    this.serviceRegister.getBuscarItinerario(userID)
    .then(data => {
      this.all_itinerarios = JSON.parse(data.data);
      this.all_itinerarios.forEach(iti => {
        if(this.list_disponibles.includes(Number(iti.id))){
          iti.color = '#575756'; //GRIS
        }else{
          iti.color = '#1F4D9A'; //AZUL
        }
      });
    })
    .catch(error => {
      console.log(error.error);
    });
  }

  getListGuiasCompradas(lista: any){
    if(lista != null){

      if(lista.monumento != null && lista.monumento.length > 0){
        lista.monumento.forEach(nivel1 => {
          if(!this.list_disponibles.includes(nivel1.idguia)){
            this.list_disponibles.push(nivel1.idguia);
          }
        });
      }
      if(lista.monumento_comp != null && lista.monumento_comp.length > 0){
        lista.monumento_comp.forEach(nivel1 => {
          if(!this.list_disponibles.includes(nivel1.idguia)){
            this.list_disponibles.push(nivel1.idguia);
          }
        });
      }
      if(lista.dia != null && lista.dia.length > 0){
        lista.dia.forEach(nivel1 => {
          if(!this.list_disponibles.includes(nivel1.idguia)){
            this.list_disponibles.push(nivel1.idguia);
          }
        });
      }
      if(lista.itinerario != null && lista.itinerario.length > 0){
        lista.itinerario.forEach(nivel1 => {
          if(!this.list_disponibles.includes(nivel1.idguia)){
            this.list_disponibles.push(nivel1.idguia);
          }
        });
      }

      console.log(this.list_disponibles);
    }
  }

  buyToWeb(id_woo: Number){
    this.serviceRegister.postUserToken()
    .then(data =>{
     if(data != null){
        let res =  JSON.parse(data.data);
        this.serviceRegister.goToProductToWeb(res.token, id_woo)
        .then(res =>{
          if(res != null){
            let result = JSON.parse(res.data);
            this.iab.create(result.permalink, '_system').show();
          }
        })  
      }
    });
      
  }

}
