import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StoreModule } from '@ngrx/store';


import { mediaStateReducer } from './providers/store/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { PipesModule } from './pipes/pipes.module';
import { IonicStorageModule } from '@ionic/storage';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { AudioProvider } from './providers/audio/audio';
import { CloudProvider } from './providers/cloud/cloud';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule,
            HttpClientModule,
            PipesModule,
            IonicStorageModule.forRoot({
              name: '__mydb',
              driverOrder: ['indexeddb', 'sqlite', 'websql', 'localstorage']
            }),
            StoreModule.forRoot({
              appState: mediaStateReducer
            })         
          ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    AudioProvider,
    PhotoViewer,
    CloudProvider,
    ScreenOrientation,
    InAppBrowser
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
