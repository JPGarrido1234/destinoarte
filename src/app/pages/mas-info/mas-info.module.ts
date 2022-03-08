import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasInfoPageRoutingModule } from './mas-info-routing.module';

import { MasInfoPage } from './mas-info.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasInfoPageRoutingModule
  ],
  declarations: [MasInfoPage]
})
export class MasInfoPageModule {}
