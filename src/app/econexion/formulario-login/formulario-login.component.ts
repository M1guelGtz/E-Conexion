import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login.service';


@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent{
  loginFormulario: FormGroup;
  alerta: string | null = null; 
  ojo: boolean = false; 

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginFormulario = this.fb.group({
      correo_usuario: ['', [Validators.required, Validators.email]],
      contrasena_usuario : ['', Validators.required]
    });
  }

  IniciarSesion() {
    if (this.loginFormulario.valid) {
      const credentials = this.loginFormulario.value;

      this.loginService.login(credentials).subscribe({
        next: (response) => {
          this.loginService.saveToken(response.access_token); 
          localStorage.setItem('userId', response.id_usuario.toString());
          this.alerta = null;
          this.router.navigate(['/red/publicaciones']); 
        },
        error: () => {
          this.alerta = 'Correo o contraseña incorrectos.';
        }
      });
    }
  }

  eye() {
    this.ojo = !this.ojo;
    const passwordInput = document.querySelector('input[formControlName="password"]') as HTMLInputElement;
    if (passwordInput) {
      passwordInput.type = this.ojo ? 'text' : 'password';
    }
  }

}
