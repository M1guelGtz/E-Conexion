import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Publicacion } from '../../../../Interfaces/publicacion';
import { PublicacionesService } from '../../../../servicios/publicaciones.service';

@Component({
  selector: 'app-lista-p',
  templateUrl: './lista-p.component.html',
  styleUrl: './lista-p.component.css'
})
export class ListaPComponent {

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
