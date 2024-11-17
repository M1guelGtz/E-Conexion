import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from '../../../../servicios/eventos.service';
import { Eventos } from '../../../../Interfaces/eventos';

@Component({
  selector: 'app-form-evento',
  templateUrl: './form-evento.component.html',
  styleUrls: ['./form-evento.component.css']
})
export class FormEventoComponent implements OnInit {
  eventoForm: FormGroup;
  idEvento: number | null = null;

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
      descripcion: ['', Validators.required]
    });
  }
 
  Accion: any;

  ngOnInit(): void {
    this.idEvento = Number(this.route.snapshot.paramMap.get('id'));
    if (this.idEvento) {
      this.cargarEvento(this.idEvento);
      this.Accion= "Editar"

    }
    else {
      this.Accion = "Crear"
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

  crearEvento(): void {
    if (this.eventoForm.valid) {
      const formValues = this.eventoForm.value;
      const fechaInicio = new Date(`${formValues.fechaInicio}T${formValues.horaInicio}:00`);
      const fechaFinal = new Date(`${formValues.fechaFinal}T${formValues.horaFinal}:00`);
      const now = new Date();
    const estatus = now < fechaInicio ? 'Programado' : (now >= fechaInicio && now <= fechaFinal ? 'Activo' : 'Terminado');

      const nuevoEvento: Eventos = {
        id_evento_usuario: 1,
        id_organizador: 1,
        id_donacion: null,
        descripcion: formValues.descripcion,
        estatus: estatus,
        nombre: formValues.nombreEvento,
        ubicacion: formValues.ubicacion,
        estatus_donacion: 'si',
        estatus_donador: 'no',
        fecha_creacion: fechaInicio.toISOString(),
        fecha_termino: fechaFinal.toISOString(),
        id_eventos: this.idEvento
      };

      if (this.idEvento) {
        console.log(nuevoEvento);
        
        this.eventoService.editarEvento(this.idEvento, nuevoEvento).subscribe(
          () => {
            console.log('Evento editado con éxito');
            this.router.navigate(['red/eventos/miseventos']);
          },
          (error) => {
            console.error('Error al editar el evento:', error);
          }
        );
      } else {
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
    this.Accion == "Crear" ? this.router.navigate(['red/eventos']): this.router.navigate(['red/eventos/miseventos'])
  }
}
