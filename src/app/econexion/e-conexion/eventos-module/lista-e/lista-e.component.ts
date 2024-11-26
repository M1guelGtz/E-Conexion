import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EventosService } from '../../../../servicios/eventos.service';

@Component({
  selector: 'app-lista-e',
  templateUrl: './lista-e.component.html',
  styleUrl: './lista-e.component.css'
})
export class ListaEComponent {
  eventos: any[] = [];

  constructor(private title: Title, private eventosService: EventosService) {}

  ngOnInit(): void {
    this.title.setTitle('Econexion | Eventos');
    this.cargarEventos();
    
  }

  cargarEventos(): void {
    this.eventosService.obtenerEventos().subscribe(
      (data) => {
        this.eventos = data.reverse();
        console.log(data);
        
      },
      (error) => {
        console.error('Error al obtener los eventos:', error);
      }
    );
  }
}