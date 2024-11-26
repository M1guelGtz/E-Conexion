import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css'],
})
export class FormularioRegistroComponent {
  registroForm: FormGroup;
  mostrarErrorContrasenas: boolean = false;
  imagenSeleccionada: File | null = null;
  creado: boolean= false
  error:boolean=false
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
      telefono_usuario: ['', Validators.required, ],
      tipo_usuario: ['usuario', Validators.required],
      estatus: ['activo', Validators.required],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      conf_contrasena_usuario: ['', Validators.required]
    });
  }
  guardado = {
    nombre_usuario: "",
    apellidos_usuario:"",
    correo_usuario: "",
    contrasena_usuario:"",
    telefono_usuario: 0,
    tipo_usuario: "",
    estatus:"",
    descripcion: "",
    conf_contrasena_usuario: ""
  }

  onImagenSeleccionada(event: any) {
    const archivo = event.target.files[0];
    if (archivo) {
      this.imagenSeleccionada = archivo;
    }
  }

  validarContrasenas(): void {
    const contrasena = this.registroForm.get('contrasena_usuario')?.value;
    const conf_contrasena = this.registroForm.get('conf_contrasena_usuario')?.value;
    console.log(contrasena + "==" + conf_contrasena);
    
    contrasena == conf_contrasena ? [this.mostrarErrorContrasenas = false, console.log("las contraseñas coinciden")
    ] : [this.mostrarErrorContrasenas = true, console.log("No coinciden")
    ]
  }
  confValidarContrasenas(): void {
    const contrasena = this.registroForm.get('contrasena_usuario')?.value;
    const conf_contrasena = this.registroForm.get('conf_contrasena_usuario')?.value;

    console.log(contrasena + "==" + conf_contrasena);
    
    contrasena != conf_contrasena ? [this.mostrarErrorContrasenas = true, console.log("las contraseñas no coinciden")
    ] : [this.mostrarErrorContrasenas = false, console.log("coinciden")
    ]
  }
  registrado = false
  registrarUsuario() {
    if (this.registroForm.valid && this.imagenSeleccionada) {
      const usuario = this.registroForm.value;
      this.loginService
        .registrarUsuarioConImagen(usuario, this.imagenSeleccionada)
        .subscribe({
          next: (response) => {
            this.registrado = true
            this.creado = true
            console.log(this.registrado);
            
            console.log('Usuario registrado con éxito:', response);
            this.guardado = response
            console.log(usuario , this.imagenSeleccionada);
            this._router.navigate(['/login']);
          },
          error: (err) => {
            console.error('Error al registrar usuario:', err);
            console.log(usuario , this.imagenSeleccionada);
            this.error = true
            
          },
        });
    } else {
      console.error('Formulario inválido o imagen no seleccionada');
      this.error=true
      
    }
  }
  closeError(){
    this.error=false
  }
  aceptar(){
    this.registrado = false
    this.creado = true
  }
}