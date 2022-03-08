import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable } from 'rxjs';
import { MenuDataService } from './service/menu-data.service';
import { Componente } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  componentes: Observable<Componente[]>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuService: MenuDataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.componentes = this.menuService.getMenuOpts();
    });
  }
/*
  cerrarSesion(){
    this.presentConfirm();
  }

  async presentConfirm() {
    const alert = await this.alertCtrl.create({
      message: '¿Seguro que quiere salir de la aplicación?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'SI',
          handler: () => {
            console.log('Ha pulsado en el cierre de sesión..');
          }
        }
      ]
    });
    await alert.present();
  }
*/
}
