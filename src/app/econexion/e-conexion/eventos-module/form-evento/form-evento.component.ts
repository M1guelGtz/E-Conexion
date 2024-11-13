import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-evento',
  templateUrl: './form-evento.component.html',
  styleUrl: './form-evento.component.css'
})
export class FormEventoComponent {
  constructor(private router: Router) {}

  crearEvento() {
    // Lógica para guardar el evento
    console.log('Evento creado');
    this.router.navigate(['red/eventos']); 
  }

  cancelar() {
    this.router.navigate(['red/eventos']); 
  }
}
