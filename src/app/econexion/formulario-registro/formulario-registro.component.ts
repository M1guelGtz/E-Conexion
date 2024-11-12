import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
})
export class FormularioRegistroComponent {

  constructor (private _router: Router){}

  registrarUsuario(){
    this._router.navigate(["/login"])
    console.log('Usuario registrado');
  }
}
