import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PerfilService } from '../../../../servicios/perfil.service';
import { log } from 'console';

@Component({
  selector: 'app-form-actulizar-perfil',
  templateUrl: './form-actulizar-perfil.component.html',
  styleUrl: './form-actulizar-perfil.component.css',
})
export class FormActulizarPerfilComponent implements OnInit {
  actulizarperfilForm: FormGroup;
  mostrarErrorContrasenas: boolean = false;
  imagenSeleccionada: File | string = '';
  creado: boolean = false;
  error: boolean = false;

  constructor(
    private _router: Router,    
    private fb: FormBuilder,
    private perfilService: PerfilService
  ) {
    this.actulizarperfilForm = this.fb.group({
      nombre_usuario: ['', Validators.required],
      apellidos_usuario: ['', Validators.required],
      correo_usuario: ['', [Validators.required, Validators.email]],
      contrasena_usuario: [''],
      telefono_usuario: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      tipo_usuario: ['usuario', Validators.required],
      estatus: ['activo', Validators.required],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(): void {
    const userId = sessionStorage.getItem('userId');
    if (userId) {
      this.perfilService.getPerfilById(+userId).subscribe({
        next: (usuario) => {
          this.actulizarperfilForm.patchValue(usuario);
        },
        error: (err) => {
          console.error('Error al cargar los datos del usuario:', err);
          this.error = true;
        },
      });
    } else {
      console.error('No se encontró el ID del usuario en sessionStorage');
    }
  }

  onImagenSeleccionada(event: any): void {
    const archivo = event.target.files[0];
    if (archivo) {
      this.imagenSeleccionada = archivo || '';
    }
  }

  registrarUsuario(): void {
    console.log(this.actulizarperfilForm.value);
    if (this.actulizarperfilForm.valid) {
      const formData = new FormData();
      
      if (this.imagenSeleccionada && typeof this.imagenSeleccionada !== 'string') {
        formData.append('imagen', this.imagenSeleccionada);
      }
  
      Object.keys(this.actulizarperfilForm.value).forEach((key) => {
        formData.append(key, this.actulizarperfilForm.value[key]);
      });
  
      const userId = sessionStorage.getItem('userId');
      if (userId) {
        this.perfilService.updatePerfilById(formData).subscribe({
          next: () => {
            this.creado = true; 
            console.log('Usuario actualizado con éxito');
            this._router.navigate(['red/perfil'])
          },
          error: (err) => {
            console.error('Error al actualizar el usuario:', err);
            this.error = true;
          },
        });
      } else {
        console.error('No se encontró el ID del usuario en sessionStorage');
        this.error = true;
      }
    } else {
      console.error('Formulario inválido');
      this.error = true;
    }
  }
  

  closeError(): void {
    this.error = false;
  }

  cancelar(){
    this._router.navigate(['red/perfil'])
  }
}
