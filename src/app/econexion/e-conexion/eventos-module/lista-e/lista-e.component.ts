import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EventosService } from '../../../../servicios/eventos.service';
import { PerfilService } from '../../../../servicios/perfil.service';
import { error } from 'console';

@Component({
  selector: 'app-lista-e',
  templateUrl: './lista-e.component.html',
  styleUrl: './lista-e.component.css'
})
export class ListaEComponent {
  eventos: any[] = [];

  constructor(private title: Title, private eventosService: EventosService, private perfilservice : PerfilService) {}

  ngOnInit(): void {
    this.title.setTitle('Econexion | Eventos');
    this.cargarEventos();
    
  }

  cargarEventos(): void {
    this.eventosService.obtenerEventos().subscribe(
      (eventos) => {
        eventos.forEach((evento: any) => {
          this.perfilservice.getPerfilById(evento.id_organizador).subscribe(
            (perfil) => {
              evento.nombreOrganizador = perfil.nombre_usuario;
            },
            (error) => {
              console.error('Error al obtener el perfil del organizador:', error);
              evento.nombreOrganizador = 'Desconocido'; 
            }
          );
        });
        this.eventos = eventos.reverse();
        console.log('Eventos enriquecidos:', this.eventos);
      },
      (error) => {
        console.error('Error al obtener los eventos:', error);
      }
    );
  }
}
