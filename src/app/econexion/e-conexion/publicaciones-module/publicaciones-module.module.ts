import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesModuleRoutingModule } from './publicaciones-module-routing.module';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';


@NgModule({
  declarations: [
    PublicacionesComponent
  ],
  imports: [
    CommonModule,
    PublicacionesModuleRoutingModule
  ]
})
export class PublicacionesModuleModule { }
