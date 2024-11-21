import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EventosService } from '../../../../servicios/eventos.service';
import { log } from 'console';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent implements OnInit {
  eventos: any[] = [];

  constructor(private title: Title, private eventosService: EventosService) {}

  ngOnInit(): void {
    this.title.setTitle('Econexion | Eventos');
    this.cargarEventos();
    
  }

  cargarEventos(): void {
    this.eventosService.obtenerEventos().subscribe(
      (data) => {
        this.eventos = data;
        console.log(data);
        
      },
      (error) => {
        console.error('Error al obtener los eventos:', error);
      }
    );
  }
}
