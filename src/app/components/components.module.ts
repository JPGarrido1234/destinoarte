import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { LoadingImageComponent } from './loading-image/loading-image.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoadingImageComponent
  ],
  exports: [
    HeaderComponent,
    LoadingImageComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
