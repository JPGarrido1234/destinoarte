import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-condiciones-uso',
  templateUrl: './condiciones-uso.page.html',
  styleUrls: ['./condiciones-uso.page.scss'],
})
export class CondicionesUsoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  clickedStar(){
    this.router.navigate(['/tabs/inicio']);
  }

}
