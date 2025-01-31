import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesModuleRoutingModule } from './publicaciones-module-routing.module';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { CardPublicacionComponent } from './card-publicacion/card-publicacion.component';
import { FormPublicacionComponent } from './form-publicacion/form-publicacion.component';
import { MisPublicacionesComponent } from './mis-publicaciones/mis-publicaciones.component';
import { CardMisPublicacionesComponent } from './card-mis-publicaciones/card-mis-publicaciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaPComponent } from './lista-p/lista-p.component';


@NgModule({
  declarations: [
    PublicacionesComponent,
    CardPublicacionComponent,
    FormPublicacionComponent,
    MisPublicacionesComponent,
    CardMisPublicacionesComponent,
    ListaPComponent,
  ],
  imports: [
    CommonModule,
    PublicacionesModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    MisPublicacionesComponent
  ]
})
export class PublicacionesModuleModule { }