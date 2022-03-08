import { Injectable, Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {

  constructor(private http: HttpClient) { }

  getMenuOpts(){
    return this.http.get<Componente[]>('assets/data/menu-opts.json');
  }

  getMenuGuia(){
    return this.http.get<any[]>('assets/data/menu-guia.json');
  }

  
}
