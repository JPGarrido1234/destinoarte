import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor( private iab: InAppBrowser) { }

  ngOnInit() {
  }

  productBuy(){
    this.iab.create('https://www.destinoarte.com/audioguias-culturales/', '_system').show();
  }

}
