import { Component, Input, OnInit } from '@angular/core';
import { PublicacionesService } from '../../../../servicios/publicaciones.service';
import { Publicacion } from '../../../../Interfaces/publicacion';

@Component({
  selector: 'app-card-publicacion',
  templateUrl: './card-publicacion.component.html',
  styleUrl: './card-publicacion.component.css'
})
export class CardPublicacionComponent implements OnInit {
  constructor(private _servicioUser: PublicacionesService){}


  ngOnInit(): void {
  }
  @Input() publicacion: Publicacion = {
    id_publicaciones_usuario: 0,
    imagen: "",
    descripcion: "",
    fecha: "",
    id_publicaciones: 0,
    nombre_usuario: "",
    titulo: ""
  }
}
