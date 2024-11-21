import { Component, Input, OnInit } from '@angular/core';
import { Donacion } from '../../../../Interfaces/donacion';
import { DonacionesService } from '../../../../servicios/donacion.service';
import { EventosService } from '../../../../servicios/eventos.service';
import { Eventos } from '../../../../Interfaces/eventos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-donacion',
  templateUrl: './card-donacion.component.html',
  styleUrls: ['./card-donacion.component.css']
})
export class CardDonacionComponent implements OnInit{
  @Input() donacion!: Donacion;
  evento! : Eventos;
  modal : boolean = false;

  constructor ( public _evento_service : EventosService, private router: Router, public _donacion_service : DonacionesService) {  }
  
  ngOnInit(): void {
    console.log('Objeto donación recibido:', this.donacion);
    this. _evento_service.obtenerEventoPorId(this.donacion.id_evento).subscribe( ( evento ) => {
      this.evento = evento
      
    } )
  }
  handleClickExpandEvent(){
    this.modal = true
  }
  handleClickCloseModal( ) {
    this.modal = false
  }

  actualizarDonacion(idDonacion : number): void{
    console.log('ID de la donación:', idDonacion);
    this.router.navigate([`red/Donaciones/donacionesform/${idDonacion}`]);
  }
  eliminarDonacion(idDonacion: number): void {
    // Confirmación antes de eliminar
    if (confirm('¿Estás seguro de que deseas eliminar esta donación?')) {
      this._donacion_service.eliminarDonacion(idDonacion).subscribe({
        next: () => {
          alert('Donación eliminada con éxito');
          window.location.reload(); 
        },
        error: (err) => {
          console.error('Error al eliminar la donación:', err);
          if (err.status === 400 || err.status === 409) {
            alert('No se puede eliminar la donación porque está asociada a otro recurso.');
          } else {
            alert('Ocurrió un error inesperado. Inténtalo de nuevo más tarde.');
          }
        },
      });
    }
  }
  

}


