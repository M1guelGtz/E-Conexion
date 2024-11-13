import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesModuleRoutingModule } from './publicaciones-module-routing.module';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { CardPublicacionComponent } from './card-publicacion/card-publicacion.component';
import { FormPublicacionComponent } from './form-publicacion/form-publicacion.component';


@NgModule({
  declarations: [
    PublicacionesComponent,
    CardPublicacionComponent,
    FormPublicacionComponent
  ],
  imports: [
    CommonModule,
    PublicacionesModuleRoutingModule
  ]
})
export class PublicacionesModuleModule { }
