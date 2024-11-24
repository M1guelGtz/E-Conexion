import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../../../servicios/eventos.service';
import { Eventos } from '../../../../Interfaces/eventos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos-usuario',
  templateUrl: './eventos-usuario.component.html',
  styleUrls: ['./eventos-usuario.component.css']
})
export class EventosUsuarioComponent implements OnInit {
  eventosUsuario: Eventos[] = [];
  idUsuario: number = 0; // Inicializa con un valor por defecto

  constructor(
    public eventoService: EventosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener el idUsuario desde sessionStorage
    const userIdString = sessionStorage.getItem('userId');
    if (userIdString !== null) {
      this.idUsuario = Number(userIdString);
    } else {
      // Maneja el caso donde el userId no está disponible en sessionStorage
      console.error('No se encontró el userId en sessionStorage');
    }

    this.eventoService.obtenerEventosPorUsuario(this.idUsuario).subscribe(
      eventos => {
        this.eventoService.Eventos = eventos;
        console.log(this.eventoService.Eventos);
      },
      error => {
        console.error('Error al obtener los eventos:', error);
      }
    );
  }

  editarEvento(idEvento: number): void {
    this.router.navigate([`red/eventos/form-evento/${idEvento}`]);
  }

  eliminarEvento(idEvento: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este evento?')) {
      this.eventoService.eliminarEvento(idEvento).subscribe(
        () => {
          console.log("eliminado bien chido");
          let aux: any[] = [];
          this.eventoService.Eventos.map((element) => {
            if (element.id_eventos != idEvento) {
              aux.push(element);
            }
          });
          this.eventoService.Eventos = aux;
        },
        error => {
          console.error('Error al eliminar el evento:', error);
        }
      );
    }
  }
}
