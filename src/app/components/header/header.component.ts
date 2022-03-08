import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MenuDataService } from '../../service/menu-data.service';
import { Componente } from '../../interfaces/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{

  @Input() titulo: string = '';

  componentes: Observable<Componente[]>;

  constructor( private menuCtrl: MenuController,
               private dataService: MenuDataService ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  mostrarMenu() {
    this.menuCtrl.open('first');
  }
}
