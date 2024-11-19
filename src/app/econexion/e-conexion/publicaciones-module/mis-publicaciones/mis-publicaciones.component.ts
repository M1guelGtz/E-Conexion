import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PublicacionesService } from '../../../../servicios/publicaciones.service';

@Component({
  selector: 'app-mis-publicaciones',
  templateUrl: './mis-publicaciones.component.html',
  styleUrl: './mis-publicaciones.component.css'
})
export class MisPublicacionesComponent implements OnInit {
  constructor(public _servicio_publicaciones: PublicacionesService, private title: Title){}
  
  id_usuario: number = 1
  ngOnInit(): void {
    this._servicio_publicaciones.getMisPublicaciones(this.id_usuario).subscribe( data => {
      this._servicio_publicaciones.publicaciones = data
      console.log("publicaciones",data)
    })
    this.title.setTitle("Econexion | Mis Publicaciones")
  }
  



}
