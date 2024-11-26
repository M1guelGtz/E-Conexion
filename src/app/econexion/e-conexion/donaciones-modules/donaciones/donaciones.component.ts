import { Component, OnInit } from '@angular/core';
import { Donacion } from '../../../../Interfaces/donacion';
import { DonacionesService } from '../../../../servicios/donacion.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements OnInit {
  donaciones: Donacion[] = [];
  idUsuario: number = 0; 

  constructor(private donacionesService: DonacionesService , private title : Title) {}

  ngOnInit(): void {
    
    const userIdString = sessionStorage.getItem('userId');
    if (userIdString !== null) {
      this.idUsuario = Number(userIdString);
    } else {
      console.error('No se encontró el userId en sessionStorage');
    }

    this.obtenerDonacionesPorUsuario(this.idUsuario);
    this.title.setTitle('Econexion | Donaciones')
  }

  obtenerDonacionesPorUsuario(idUsuario: number): void {
    this.donacionesService.obtenerDonacionesPorUsuario(idUsuario).subscribe(
      (data: Donacion[]) => this.donaciones = data,
      (error) => console.error('Error al obtener donaciones:', error)
    );
  }
}