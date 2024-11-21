import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent{

  constructor(private _router: Router, private fb: FormBuilder){
    this.loginFormulario = this.fb.group({
      usuario: ['', [Validators.required, Validators.pattern('^[0-9a-zA-Z. ]+$')]],
      contra: ['', [Validators.required, Validators.pattern('^[0-9a-zA-Z. ]+$')]]
    });
  }
  alerta: boolean = false
  ojo:boolean=false
  password:string = "password"
  loginFormulario: FormGroup;
  IniciarSesion(){
    if (this.loginFormulario.valid) {
      console.log(this.loginFormulario.value);
      this._router.navigate(["/red"])
    }
  }
  eye(){
    this.password == "password" ? this.password="text": this.password="password"
    this.ojo=!this.ojo
  }
}
