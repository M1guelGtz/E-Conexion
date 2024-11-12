import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css'
})
export class PublicacionesComponent {

  publicaciones = [
    {
      titulo: "Limpieza de rios en suchiapa",
      usuario: 'Rodrigo Emilio',
      fecha: this.getCurrentDate(),
      imagen: 'LOGO.png', 
      descripcion: 'Recoleccion de basura en los rios de la ciudad de suchiapa chiapas el dia 22 de diciembre del 2024, el evento comenzara en las afueras del panten a las 4:30 pm'

    },
    {
      titulo: "Recoleccion de basura en las calles",
      usuario: 'Miguel Gtz',
      fecha: this.getCurrentDate(),
      imagen: 'LOGO.png', 
      descripcion: 'Recoleccion de basura en la ciudad de suchiapa chiapas el dia 22 de diciembre del 2024, el evento comenzara en las afueras del panten a las 4:30 pm'
    },
    {
      titulo: "Carlos Daniel",
      usuario: 'Carlos Daniel',
      fecha: this.getCurrentDate(),
      imagen: 'LOGO.png', 
      descripcion: 'descripcion de la publicacion'
    }
  ];

  constructor(private _title : Title) {}
  mostrarAlerta: boolean = false;

  ngOnInit(): void {
    this._title.setTitle('Econexion | Publicaciones')
      /*if (localStorage.getItem('sesionIniciada') === 'true') {
        this.mostrarAlerta = true;
        localStorage.removeItem('sesionIniciada');
        setTimeout(() => this.mostrarAlerta = false, 5000);
      
      }*/
  }
  
  manejarCierreAlerta() {
    this.mostrarAlerta = false;
  }

  getCurrentDate(): string {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
