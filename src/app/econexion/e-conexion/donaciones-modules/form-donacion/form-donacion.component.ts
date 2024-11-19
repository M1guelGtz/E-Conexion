import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventosService } from '../../../../servicios/eventos.service';
import { DonacionesService } from '../../../../servicios/donacion.service';
import { Eventos } from '../../../../Interfaces/eventos';

@Component({
  selector: 'app-form-donacion',
  templateUrl: './form-donacion.component.html',
  styleUrls: ['./form-donacion.component.css'],
})
export class FormDonacionComponent implements OnInit {
  donacionForm: FormGroup;
  eventosDisponibles: Eventos[] = [];
  estatusSeleccionado: string | undefined;

  constructor(
    private fb: FormBuilder,
    private eventosService: EventosService,
    private donacionesService: DonacionesService,
    private router: Router
  ) {
    this.donacionForm = this.fb.group({
      eventoId: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(1)]],
      tipo_donacion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.obtenerEventos();
  }

  obtenerEventos(): void {
    this.eventosService.obtenerEventos().subscribe((eventos) => {
      this.eventosDisponibles = eventos.filter(
        (evento) => evento.estatus_donacion === 'si'
      );
    });
  }

  onEventoChange(event: any): void {
    const eventoSeleccionado = this.eventosDisponibles.find(
      (evento) => evento.id_eventos === +event.target.value
    );
    this.estatusSeleccionado = eventoSeleccionado
      ? eventoSeleccionado.estatus
      : undefined;
  }

  registrarDonacion(): void {
    if (this.donacionForm.valid) {
      const formValues = this.donacionForm.value;
      const nuevaDonacion = {
        id_donacion_usuario: 1, 
        id_evento: formValues.eventoId,
        cantidad: formValues.cantidad,
        tipo_donacion: formValues.tipo_donacion,
        estatus: this.estatusSeleccionado,
        fecha: new Date().toISOString(),
      };

      this.donacionesService.crearDonacion(nuevaDonacion).subscribe(
        (response) => {
          console.log('Donación registrada:', response);
          this.router.navigate(['red/Donaciones']); 
          console.log(nuevaDonacion);
          
        },
        (error) => {
          console.error('Error al registrar la donación:', error);
          console.log(nuevaDonacion);
          
        }
      );
    }
  }

  cancelar(): void {
    this.router.navigate(['red/Donaciones']); 
    
  }
}
