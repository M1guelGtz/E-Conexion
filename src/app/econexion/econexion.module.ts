import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EConexionRoutingModule } from './e-conexion/e-conexion-routing.module';
import { EConexionModule } from './e-conexion/e-conexion.module';
import { EconexionRoutingModule } from './econexion-routing.module';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    FormularioRegistroComponent,
    FormularioLoginComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    EconexionRoutingModule,
    EConexionModule,
    EConexionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EconexionModule { }
