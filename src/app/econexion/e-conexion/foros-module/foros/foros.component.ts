import { Component } from '@angular/core';

@Component({
  selector: 'app-foros',
  templateUrl: './foros.component.html',
  styleUrl: './foros.component.css'
})
export class ForosComponent {

  foros = [
    {
      titulo: 'Limpieza de Ríos',
      descripcion: 'Únete a nuestra próxima jornada de limpieza para mantener nuestros ríos libres de desechos.',
      organizador: 'María López'
    },
    {
      titulo: 'Reciclaje Comunitario',
      descripcion: 'Aprende sobre técnicas de reciclaje y cómo implementarlas en tu comunidad.',
      organizador: 'José Ramírez'
    },
    {
      titulo: 'Reforestación Urbana',
      descripcion: 'Participa en la plantación de árboles en áreas urbanas para mejorar nuestro entorno.',
      organizador: 'Juan Pérez'
    }
  ];

}
