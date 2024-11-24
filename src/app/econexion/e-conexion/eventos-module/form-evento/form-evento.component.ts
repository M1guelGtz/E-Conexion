import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from '../../../../servicios/eventos.service';
import { EventoPut, Eventos } from '../../../../Interfaces/eventos';

@Component({
  selector: 'app-form-evento',
  templateUrl: './form-evento.component.html',
  styleUrls: ['./form-evento.component.css']
})
export class FormEventoComponent implements OnInit {
  eventoForm: FormGroup;
  idEvento: number | null = null;
  fechaActual!: string;
  id_evento_usuario!: number;
  id_organizador!: number;

  constructor(
    private fb: FormBuilder,
    private eventoService: EventosService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.eventoForm = this.fb.group({
      nombreEvento: ['', Validators.required],
      ubicacion: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      horaInicio: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      horaFinal: ['', Validators.required],
      descripcion: ['', Validators.required],
      estatus_donacion: ['', Validators.required]
    }, { validators: this.validarFechas });
  }

  Accion: any;

  ngOnInit(): void {
    this.id_evento_usuario = Number(sessionStorage.getItem('userId'));
    this.id_organizador = Number(sessionStorage.getItem('userId'));

    this.idEvento = Number(this.route.snapshot.paramMap.get('id'));
    if (this.idEvento) {
      this.cargarEvento(this.idEvento);
      this.Accion = 'Editar';
    } else {
      this.Accion = 'Crear';
    }
  }

  cargarEvento(id: number): void {
    this.eventoService.obtenerEventoPorId(id).subscribe(
      (evento) => {
        this.eventoForm.patchValue({
          nombreEvento: evento.nombre,
          ubicacion: evento.ubicacion,
          fechaInicio: evento.fecha_creacion.split('T')[0],
          horaInicio: evento.fecha_creacion.split('T')[1].slice(0, 5),
          fechaFinal: evento.fecha_termino.split('T')[0],
          horaFinal: evento.fecha_termino.split('T')[1].slice(0, 5),
          descripcion: evento.descripcion
        });
      },
      (error) => {
        console.error('Error al cargar el evento:', error);
      }
    );
  }

  validarFechas(group: AbstractControl): { [key: string]: boolean } | null {
    const fechaInicio = group.get('fechaInicio')?.value;
    const horaInicio = group.get('horaInicio')?.value;
    const fechaFinal = group.get('fechaFinal')?.value;
    const horaFinal = group.get('horaFinal')?.value;

    if (fechaInicio && horaInicio) {
      const inicio = new Date(`${fechaInicio}T${horaInicio}:00`);
      const ahora = new Date();

      if (inicio < ahora) {
        return { fechaInicioPasada: true };
      }
    }

    if (fechaInicio && horaInicio && fechaFinal && horaFinal) {
      const inicio = new Date(`${fechaInicio}T${horaInicio}:00`);
      const final = new Date(`${fechaFinal}T${horaFinal}:00`);

      if (final < inicio) {
        return { fechaFinalAntesInicio: true };
      }

      const diferenciaHoras = (final.getTime() - inicio.getTime()) / (1000 * 60 * 60);
      if (diferenciaHoras < 1) {
        return { diferenciaInsuficiente: true };
      }
    }

    return null;
  }

  crearEvento(): void {
    if (this.eventoForm.valid) {
      const formValues = this.eventoForm.value;
      const fechaInicio = new Date(`${formValues.fechaInicio}T${formValues.horaInicio}:00`);
      fechaInicio.setHours(fechaInicio.getHours() - 6);
      const fechaFinal = new Date(`${formValues.fechaFinal}T${formValues.horaFinal}:00`);
      fechaFinal.setHours(fechaFinal.getHours() - 6);
      const now = new Date();
      const estatus = now < fechaInicio ? 'Programado' : (now >= fechaInicio && now <= fechaFinal ? 'Activo' : 'Terminado');

      const eventoAPI: EventoPut = {
        id_donacion: null,
        descripcion: formValues.descripcion,
        fecha_creacion: fechaInicio.toISOString(),
        fecha_termino: fechaFinal.toISOString(),
        estatus: estatus,
        nombre: formValues.nombreEvento,
        ubicacion: formValues.ubicacion,
        estatus_donacion: formValues.estatus_donacion,
        estatus_donador: 'no',
      };

      if (this.idEvento) {
        this.eventoService.editarEvento(this.idEvento, eventoAPI).subscribe(
          () => {
            console.log('Evento editado con éxito');
            this.router.navigate(['red/eventos/miseventos']);
          },
          (error) => {
            console.error('Error al editar el evento:', error);
          }
        );
      } else {
        const nuevoEvento: Eventos = {
          id_donacion: null,
          descripcion: formValues.descripcion,
          fecha_creacion: fechaInicio.toISOString(),
          fecha_termino: fechaFinal.toISOString(),
          estatus: estatus,
          nombre: formValues.nombreEvento,
          ubicacion: formValues.ubicacion,
          estatus_donacion: formValues.estatus_donacion,
          estatus_donador: 'no',
          id_evento_usuario: this.id_evento_usuario,
          id_organizador: this.id_organizador,
          id_eventos: this.idEvento
        };

        this.eventoService.crearEvento(nuevoEvento).subscribe(
          (response) => {
            console.log('Evento creado con éxito:', response);
            this.router.navigate(['red/eventos']);
          },
          (error) => {
            console.error('Error al crear el evento:', error);
          }
        );
      }
    }
  }

  cancelar(): void {
    this.Accion === 'Crear' ? this.router.navigate(['red/eventos']) : this.router.navigate(['red/eventos/miseventos']);
  }
}
