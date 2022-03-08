import { Injectable } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  entorno = {
    local :{
      url: "http://localhost/wordpress/index.php/",
      username: "jpgl",
      password: "1234"
    },
    produccion:{
      url: "https://www.destinoarte.com/index.php/",
      username: "jpgl.garrido.linares@gmail.com",
      password: "dX0yt)a1SEhS1NzO"
    } 
  }

  urlPeticion : string;
  isLoading = false;
  
  constructor(private http: HTTP, private loadingCtrl: LoadingController, private storage: Storage) { }

  async getUserId(): Promise<any>{
    return await this.storage.get('IDUser');
  }

  async getAudioMp3(): Promise<any>{
    return await this.storage.get('reproducirMp3');
  }

  async getTitleAudio(): Promise<any>{
    return await this.storage.get('titleAudio');
  }

  async getAllData(): Promise<any>{
    return await this.storage.get('mydestines');
  }

  async getMonSee(): Promise<any>{
    return await this.storage.get('monumentSee');
  }

  async getExistCityInSelect(): Promise<any>{
    return await this.storage.get('existCityInSelect');
  }

  async getTitleHeader(): Promise<any>{
    return await this.storage.get('titleHeader');
  }

  async getPlayAudio(): Promise<any>{
    return await this.storage.get('playAudio');
  }

  async getShowPlayAudio(): Promise<any>{
    return await this.storage.get('showPlayAudio');
  }

  async getTipoAudio(): Promise<any>{
    return await this.storage.get('tipoAudio');
  }

  async getModoAudio(): Promise<any>{
    return await this.storage.get('modoAudio');
  }

  async getFontSize(): Promise<any>{
    return await this.storage.get('fontSize');
  }

  async getPlanoObject(): Promise<any>{
    return await this.storage.get('planoObject');
  }


  public getDataUser(idUser:any): Promise<any>{  
    this.urlPeticion = this.entorno.produccion.url.concat("wp-json/jwt-auth/v1/users/").concat(idUser);
    return this.http.get(this.urlPeticion, 
      {},
      {
        "Content-Type": "application/x-www-form-urlencoded"
      });
  }

  public postResetUserPassword(email: any): Promise<any>{
    this.urlPeticion = this.entorno.produccion.url.concat("wp-json/bdpwr/v1/reset-password");
    
    return this.http.post(this.urlPeticion,{
      "email": email,
    },{
      "Content-Type": "application/x-www-form-urlencoded"
    });
  }

  public postUserSetPassword(email, pass, codigo): Promise <any>{
    this.urlPeticion = this.entorno.produccion.url.concat("wp-json/bdpwr/v1/set-password");

    return this.http.post(this.urlPeticion,{
      "email": email,
      "password": pass,
      "code": codigo
    },{
      "Content-Type": "application/x-www-form-urlencoded"
    });
  }


  public postLoginToken(formulario: NgForm): Promise<any> {

    this.urlPeticion = this.entorno.produccion.url.concat("wp-json/jwt-auth/v1/login");

    let loginUser = {
      email: formulario.form.value.email,
      password: formulario.form.value.password
    }

    return this.http.post(this.urlPeticion, 
    {
      "username": loginUser.email,
      "password": loginUser.password
    }, {
      "Content-Type": "application/x-www-form-urlencoded"
    });
  }

  public postUserRegister(formulario: NgForm, response: any): Promise<any>{

    this.urlPeticion = this.entorno.produccion.url.concat("wp-json/wp/v2/users");

    let registerUser = {
      nameSurname : formulario.form.value.nameSurname,
      username : formulario.form.value.username,
      email : formulario.form.value.email,
      password : formulario.form.value.pass
    }
        
    return this.http.post(this.urlPeticion, 
    {
      "username": registerUser.username, 
      "email": registerUser.email, 
      "password": registerUser.password 
    }, 
    {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Bearer " + response.token
    });

  }

  public postUserToken(): Promise<any>{

    this.urlPeticion = this.entorno.produccion.url.concat("wp-json/jwt-auth/v1/token");

    return this.http.post(this.urlPeticion, 
    {
      "username": this.entorno.produccion.username, 
      "password": this.entorno.produccion.password
    }, 
    {
      "Content-Type": "application/x-www-form-urlencoded"
    });
  }

  public goToProductToWeb(token:any, id_woo: any): Promise<any>{
  
      this.urlPeticion = this.entorno.produccion.url.concat('wp-json/wc/v1/products/').concat(id_woo);     
        
      return this.http.get(this.urlPeticion,
          {
            "consumer_key": "cs_3e0215982217b3fca8ac702503c9ee051439ddc3"
          },
          {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + token
          });
  }

  public postUserForgetEmail(formulario: NgForm, response: any): Promise<any>{
  
    this.urlPeticion = this.entorno.produccion.url.concat("wp-json/jwt-auth/v1/users/lostpass");
    
    const forgetUser = {
      email : formulario.form.value.email
    } 

    return this.http.post(this.urlPeticion, 
      {
      "email": forgetUser.email
      }, 
      {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Bearer " + response.token
    });      
  }

  public postUserResetPass(formulario: NgForm, response: any): Promise<any>{
  
    this.urlPeticion = this.entorno.produccion.url.concat("wp-json/jwt-auth/v1/users/resetpass");
    
    const resetPassUser = {
      pass : formulario.form.value.pass
    } 

    return this.http.post(this.urlPeticion, 
      {
      "pass": resetPassUser.pass
      }, 
      {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Bearer " + response.token
    });      
  }


  public getBuscarItinerario(idUser: any){

    this.urlPeticion = this.entorno.produccion.url.concat("wp-json/jwt-auth/v1/buscardisponibles/").concat(idUser);

    return this.http.get(this.urlPeticion,{},
    {
      "Content-Type": "application/x-www-form-urlencoded"
    });
  }

  public getDataGuia(idGuia: any): Promise<any>{

    this.urlPeticion = this.entorno.produccion.url.concat("wp-json/jwt-auth/v1/buscar/").concat(idGuia);

    return this.http.get(this.urlPeticion,
      {},
      {
        "Content-Type": "application/x-www-form-urlencoded"
      });
  }

  public getDataMyDestines(idUser: any): Promise<any>{
    
    this.urlPeticion = this.entorno.produccion.url.concat("wp-json/jwt-auth/v1/mis-destinos/").concat(idUser);
    
    return this.http.get(this.urlPeticion,
      {},
      {
        "Content-Type": "application/x-www-form-urlencoded"
      });
  }

  public getCities(): Promise<any>{
    this.urlPeticion = this.entorno.produccion.url.concat("wp-json/jwt-auth/v1/ciudades");

    return this.http.get(this.urlPeticion,
      {},
      {
        "Content-Type": "application/x-www-form-urlencoded"
      });
  }                                                                                                                                                                                                  

  async present(titleProgress: string) {

   this.isLoading = true;
    return await this.loadingCtrl.create({
        message: titleProgress
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
      
     console.log('present control');
    });
  }

  async dismiss() {
    if(this.isLoading){
      this.isLoading = false;
      return await this.loadingCtrl.dismiss().then(()=>console.log('dismissed control'));
    }
    //return;
  }
  
}
