import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasInfoPage } from './mas-info.page';

const routes: Routes = [
  {
    path: '',
    component: MasInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasInfoPageRoutingModule {}
