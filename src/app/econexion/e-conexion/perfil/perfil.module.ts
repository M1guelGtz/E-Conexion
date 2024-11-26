import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilRoutingModule } from './perfil-routing.module';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { PublicacionesModuleModule } from '../publicaciones-module/publicaciones-module.module';
import { FormActulizarPerfilComponent } from './form-actulizar-perfil/form-actulizar-perfil.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MiPerfilComponent,
    FormActulizarPerfilComponent,
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    PublicacionesModuleModule,
    ReactiveFormsModule
    
  ]
})
export class PerfilModule { }