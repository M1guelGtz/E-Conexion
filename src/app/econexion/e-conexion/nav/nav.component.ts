import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  activarInput: Boolean = true;
  activarBusqueda(){
    this.activarInput = !this.activarInput; 
  }
}
