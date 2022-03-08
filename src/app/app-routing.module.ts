import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: './pages/home/home.module#HomePageModule'},
  {path: 'inicio-sesion', loadChildren: './pages/inicio-sesion/inicio-sesion.module#InicioSesionPageModule'},
  {path: 'mas-info', loadChildren: './pages/mas-info/mas-info.module#MasInfoPageModule'},
  {path: 'forget-pass', loadChildren: './pages/forget-pass/forget-pass.module#ForgetPassPageModule'},
  {path: 'registrar-usuario', loadChildren: './pages/registrar-usuario/registrar-usuario.module#RegistrarUsuarioPageModule'},
  {path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule'},
  {path: 'configuracion', loadChildren: './pages/configuracion/configuracion.module#ConfiguracionPageModule'},
  {path: 'mi-cuenta', loadChildren: './pages/mi-cuenta/mi-cuenta.module#MiCuentaPageModule'},
  {path: 'mis-destinos', loadChildren: './pages/mis-destinos/mis-destinos.module#MisDestinosPageModule'},
  {path: 'buscar', loadChildren: './pages/buscar/buscar.module#BuscarPageModule'},
  {path: 'condiciones-uso', loadChildren: './pages/condiciones-uso/condiciones-uso.module#CondicionesUsoPageModule'},
  {path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  /* INFORMACIÓN GUIA */ 
  { path: 'detalles/:id/:iditi', loadChildren: './pages/detalles/detalles.module#DetallesPageModule' },
  { path: 'mapa/:id/:iditi', loadChildren: './pages/mapa/mapa.module#MapaPageModule' },
  { path: 'mapa/:id/:iditi/:idm', loadChildren: './pages/mapa/mapa.module#MapaPageModule'},
  { path: 'planta/:id/:iditi', loadChildren: './pages/planta/planta.module#PlantaPageModule' },
  { path: 'infografias/:id/:iditi', loadChildren: './pages/infografias/infografias.module#InfografiasPageModule' },
  { path: 'aviso-legal', loadChildren: './pages/aviso-legal/aviso-legal.module#AvisoLegalPageModule' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
