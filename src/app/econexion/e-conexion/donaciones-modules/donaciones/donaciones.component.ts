import { Component, OnInit } from '@angular/core';
import { Donacion } from '../../../../Interfaces/donacion';
import { DonacionesService } from '../../../../servicios/donacion.service';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements OnInit {
  donaciones: Donacion[] = [];

  constructor(private donacionesService: DonacionesService) {}

  ngOnInit(): void {
    this.obtenerDonaciones();
  }

  obtenerDonaciones(): void {
    this.donacionesService.obtenerDonaciones().subscribe(
      (data: Donacion[]) => this.donaciones = data,
      (error) => console.error('Error al obtener donaciones:', error)
    );
  }
}
