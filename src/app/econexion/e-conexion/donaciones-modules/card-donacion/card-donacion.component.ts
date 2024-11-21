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

  constructor ( public _evento_service : EventosService, private router: Router) {  }
  
  ngOnInit(): void {
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
    this.router.navigate([`red/Donaciones/donacionesform/${idDonacion}`]);
  }

}


