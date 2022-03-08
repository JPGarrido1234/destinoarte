import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataGetResolverService implements Resolve<any>{

  paramsGuia = {
    idguia: null,
    iditinerario: null
  } 
  

  constructor() { }

  resolve(route: ActivatedRouteSnapshot) {
    this.paramsGuia.idguia = route.paramMap.get('id');
    this.paramsGuia.iditinerario = route.paramMap.get('iditi');
    
    return this.paramsGuia;
  }
}
