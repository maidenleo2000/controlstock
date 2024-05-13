import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {


  rutaActual: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.rutaActual = event.url;
      }
      console.log(this.rutaActual)
    });
  }

  toggleButton(){
    const elemento = document.querySelector('nav');
    if (elemento) {
      elemento.classList.toggle('toggled');
    }
  }




  mostrarRuta(){
    console.log(this.router.url)
  }


}
