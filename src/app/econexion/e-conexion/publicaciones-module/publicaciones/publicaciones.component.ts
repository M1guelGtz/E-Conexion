import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PublicacionesService } from '../../../../servicios/publicaciones.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css'
})
export class PublicacionesComponent implements OnInit {
  publicaciones: any[] = [];

  constructor(private publicacionesService: PublicacionesService, private title: Title) {}

  ngOnInit(): void {
    this.publicaciones = this.publicacionesService.getPublicaciones();
    this.title.setTitle("Econexion | Publicaciones")
  }
}
