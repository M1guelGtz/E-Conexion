import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Publicacion } from '../../../../Interfaces/publicacion';
import { PublicacionesService } from '../../../../servicios/publicaciones.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css'
})
export class PublicacionesComponent implements OnInit {
  publicaciones: Publicacion[] = []
  constructor(private publicacionesService: PublicacionesService, private title: Title) {}

  ngOnInit(): void {
    this.publicacionesService.getPublicaciones().subscribe( data => {
      this.publicaciones = data
      console.log("publicaciones",data)
    })
    this.title.setTitle("Econexion | Publicaciones")
  }
}
