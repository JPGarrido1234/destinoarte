import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs.page';
import { DataResolverService } from '../../resolver/data-resolver.service';
import { DataGetResolverService } from '../../resolver/data-get-resolver.service ';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      
      {
        path: 'inicio',
        loadChildren: '../inicio/inicio.module#InicioPageModule'
      },
      {
        path: 'buscar',
        children: [
          {
            path: '',
            loadChildren: '../buscar/buscar.module#BuscarPageModule'
          },
          {
            path: ':id',
            resolve: {
              special: DataResolverService
            },
            loadChildren: '../buscar/buscar.module#BuscarPageModule'
          }
        ]
      },
      {
        path: 'mis-destinos',
        children: [
          {
          path: '',
          loadChildren: '../mis-destinos/mis-destinos.module#MisDestinosPageModule'
          },
          {
            path: ':id/:iditi',
            resolve:{
              special: DataGetResolverService
            },
            loadChildren: '../mis-destinos/mis-destinos.module#MisDestinosPageModule'
          }
        ]   
      },
      {
        path: 'comprar'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
