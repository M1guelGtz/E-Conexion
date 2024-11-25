import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilRoutingModule } from './perfil-routing.module';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { PublicacionesModuleModule } from '../publicaciones-module/publicaciones-module.module';


@NgModule({
  declarations: [
    MiPerfilComponent,
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    PublicacionesModuleModule
    
  ]
})
export class PerfilModule { }