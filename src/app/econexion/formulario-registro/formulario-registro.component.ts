import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css'],
})
export class FormularioRegistroComponent {
  registroForm: FormGroup;
  imagenSeleccionada: File | null = null;

  constructor(
    private _router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
    this.registroForm = this.fb.group({
      nombre_usuario: ['', Validators.required],
      apellidos_usuario: ['', Validators.required],
      correo_usuario: ['', [Validators.required, Validators.email]],
      contrasena_usuario: ['', Validators.required],
      telefono_usuario: ['', Validators.required],
      tipo_usuario: ['usuario', Validators.required],
      estatus: ['activo', Validators.required],
    });
  }

  onImagenSeleccionada(event: any) {
    const archivo = event.target.files[0];
    if (archivo) {
      this.imagenSeleccionada = archivo;
    }
  }

  registrarUsuario() {
    if (this.registroForm.valid && this.imagenSeleccionada) {
      const usuario = this.registroForm.value;
      this.loginService
        .registrarUsuarioConImagen(usuario, this.imagenSeleccionada)
        .subscribe({
          next: (response) => {
            console.log('Usuario registrado con éxito:', response);
            console.log(usuario , this.imagenSeleccionada);
            
            this._router.navigate(['/login']);
          },
          error: (err) => {
            console.error('Error al registrar usuario:', err);
            console.log(usuario , this.imagenSeleccionada);
            
          },
        });
    } else {
      console.error('Formulario inválido o imagen no seleccionada');
     
      
    }
  }
}
