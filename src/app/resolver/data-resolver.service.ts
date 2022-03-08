import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { UserDataService } from '../service/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<any>{

  constructor(private dataService: UserDataService) { }

  resolve(route: ActivatedRouteSnapshot) {
    let id = route.paramMap.get('id');
    return this.dataService.getDataGuia(id);
  }
}
