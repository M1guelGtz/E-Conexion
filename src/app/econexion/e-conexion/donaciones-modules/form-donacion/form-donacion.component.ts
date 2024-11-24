import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from '../../../../servicios/eventos.service';
import { DonacionesService } from '../../../../servicios/donacion.service';
import { Eventos } from '../../../../Interfaces/eventos';
import { Donacion, Donacionput } from '../../../../Interfaces/donacion';

@Component({
  selector: 'app-form-donacion',
  templateUrl: './form-donacion.component.html',
  styleUrls: ['./form-donacion.component.css'],
})
export class FormDonacionComponent implements OnInit {
  donacionForm: FormGroup;
  eventosDisponibles: Eventos[] = [];
  estatusSeleccionado: string | undefined;
  idDonacion: number | null = null;
  id_donacion_usuario: number = 0; 

  constructor(
    private fb: FormBuilder,
    private eventosService: EventosService,
    private donacionesService: DonacionesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.donacionForm = this.fb.group(
      {
        eventoId: ['', Validators.required],
        cantidad: ['', [Validators.required, Validators.min(1)]],
        tipo_donacion: ['', Validators.required],
      },
      { validators: this.validarEventoSeleccionado() }
    );
  }

  ngOnInit(): void {
    const userIdString = sessionStorage.getItem('userId');
    if (userIdString !== null) {
      this.id_donacion_usuario = Number(userIdString);
    } else {
      console.error('No se encontró el userId en sessionStorage');
    }

    this.idDonacion = Number(this.route.snapshot.paramMap.get('id'));
    this.obtenerEventos();
    console.log(this.idDonacion);

    if (this.idDonacion) {
      this.cargarDonacion(this.idDonacion);
    }
  }

  obtenerEventos(): void {
    this.eventosService.obtenerEventos().subscribe((eventos) => {
      const now = new Date();
      this.eventosDisponibles = eventos.filter((evento) => {
        const fechaInicio = new Date(evento.fecha_creacion);
        const fechaFin = new Date(evento.fecha_termino);
        return (
          evento.estatus_donacion === 'si' &&
          evento.estatus_donador !== 'si' && 
          now <= fechaFin && 
          fechaInicio <= fechaFin &&
          evento.estatus !=='Terminado'
        );
      });
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

  cargarDonacion(id: number): void {
    this.donacionesService.obtenerDonacionesPorID(id).subscribe((donacion) => {
      this.donacionForm.patchValue({
        eventoId: donacion.id_evento,
        cantidad: donacion.cantidad,
        tipo_donacion: donacion.tipo_donacion,
      });
      this.estatusSeleccionado = donacion.estatus;
    });
  }

  guardarDonacion(): void {
    if (this.donacionForm.valid) {
      const formValues = this.donacionForm.value; 
      if (this.idDonacion) {
        const donacionActualizada: Donacionput = {
          cantidad: formValues.cantidad,
          tipo_donacion: formValues.tipo_donacion,
          estatus: this.estatusSeleccionado,
          id_evento: formValues.eventoId
        };
  
        this.donacionesService.actualizarDonacion(this.idDonacion, donacionActualizada).subscribe(() => {
          console.log('Donación actualizada con éxito');
          this.router.navigate(['red/Donaciones']);
        });
      } else {
        const nuevaDonacion: Donacion = {
          id_donacion_usuario: this.id_donacion_usuario,
          id_evento: formValues.eventoId,
          cantidad: formValues.cantidad,
          tipo_donacion: formValues.tipo_donacion,
          estatus: this.estatusSeleccionado,
          fecha: new Date().toISOString(),
          id_donaciones: this.idDonacion
        };
  
        this.donacionesService.crearDonacion(nuevaDonacion).subscribe(() => {
          console.log('Donación registrada con éxito');
          this.router.navigate(['red/Donaciones']);
        });
      }
    } else {
      console.error('Formulario inválido', this.donacionForm.errors);
    }
  }

  cancelar(): void {
    this.router.navigate(['red/Donaciones']);
  }

  validarEventoSeleccionado() {
    return (formGroup: FormGroup) => {
      const eventoIdControl = formGroup.get('eventoId');
      if (eventoIdControl && eventoIdControl.value) {
        const eventoSeleccionado = this.eventosDisponibles.find(
          (evento) => evento.id_eventos === +eventoIdControl.value
        );
        if (!eventoSeleccionado) {
          eventoIdControl.setErrors({ eventoInvalido: true });
        } else {
          eventoIdControl.setErrors(null);
        }
      }
    };
  }
}
