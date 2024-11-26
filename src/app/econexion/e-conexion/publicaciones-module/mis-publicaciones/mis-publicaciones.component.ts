import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PublicacionesService } from '../../../../servicios/publicaciones.service';

@Component({
  selector: 'app-mis-publicaciones',
  templateUrl: './mis-publicaciones.component.html',
  styleUrl: './mis-publicaciones.component.css'
})
export class MisPublicacionesComponent implements OnInit {
  constructor(public _servicio_publicaciones: PublicacionesService, private title: Title) {}

  id_usuario!: number;

  ngOnInit(): void {
    const userIdString = sessionStorage.getItem('userId');
    if (userIdString !== null) {
      this.id_usuario = Number(userIdString);
    } else {
      this.id_usuario = 0; 
    }

    this._servicio_publicaciones.getMisPublicaciones(this.id_usuario).subscribe(data => {
      this._servicio_publicaciones.publicaciones = data.reverse();
      console.log("publicaciones", data);
    });
    
    this.title.setTitle("Econexion | Mis Publicaciones");
  }
}
