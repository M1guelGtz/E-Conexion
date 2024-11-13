import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  private publicaciones = [
    {
      titulo: "Limpieza de rios en suchiapa",
      usuario: 'Rodrigo Emilio',
      fecha: this.getCurrentDate(),
      imagen: 'LOGO.png',
      descripcion: 'Recolección de basura en los ríos de la ciudad de Suchiapa, Chiapas...'
    },
    {
      titulo: "Recolección de basura en las calles",
      usuario: 'Miguel Gtz',
      fecha: this.getCurrentDate(),
      imagen: 'LOGO.png',
      descripcion: 'Recolección de basura en la ciudad de Suchiapa, Chiapas...'
    },
    {
      titulo: "Carlos Daniel",
      usuario: 'Carlos Daniel',
      fecha: this.getCurrentDate(),
      imagen: 'LOGO.png',
      descripcion: 'Descripción de la publicación'
    }
  ];

  constructor() {}

  getCurrentDate(): string {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  }

  getPublicaciones() {
    return this.publicaciones;
  }

  agregarPublicacion(publicacion: any) {
    this.publicaciones.push(publicacion);
  }
}
