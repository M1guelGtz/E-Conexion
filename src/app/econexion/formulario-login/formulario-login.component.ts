import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent {
  loginFormulario: FormGroup;
  alerta: string | null = null;
  showAlert: boolean = false;
  ojo: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginFormulario = this.fb.group({
      correo_usuario: ['', [Validators.required, Validators.email]],
      contrasena_usuario: ['', Validators.required]
    });
  }
  cargando: boolean= false
  IniciarSesion() {
    this.cargando= true
    if (this.loginFormulario.valid) { 
      const credentials = this.loginFormulario.value;
      this.loginService.login(credentials).subscribe({
        next: (response) => {
          this.loginService.saveToken(response.access_token);
          sessionStorage.setItem('userId', response.id_usuario.toString());
          this.alerta = null;
          this.showAlert = false;
          sessionStorage.setItem('alerta', "si")
          this.router.navigate(['/red/publicaciones']);
        },
        error: () => {
          this.alerta = 'Correo o contraseña incorrectos.';
          this.showAlert = true;
        }
      });
    }else{
      console.log("complete todos los campos")
      this.alerta = 'Por favor, complete todos los campos.';
      this.showAlert = true
    }
  }

  passworInput = 'password';
  eye() {
    this.ojo = !this.ojo;
    this.ojo ? this.passworInput = 'text' : this.passworInput = 'password';
  }

  closeAlert() {
    this.showAlert = false;
    this.cargando= false
  }
}