import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-publicacion',
  templateUrl: './card-publicacion.component.html',
  styleUrl: './card-publicacion.component.css'
})
export class CardPublicacionComponent {
  constructor(){}

  @Input() publicacion = {
    titulo: "",
    usuario: '',
    fecha: "",
    imagen: '', 
    descripcion: ''
  }
}
