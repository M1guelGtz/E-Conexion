import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesRoutingModule } from './publicaciones-routing.module';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { CardPublicacionComponent } from './card-publicacion/card-publicacion.component';
import { FormpublicacionComponent } from './formpublicacion/formpublicacion.component';


@NgModule({
  declarations: [
    PublicacionesComponent,
    CardPublicacionComponent,
    FormpublicacionComponent

  ],
  imports: [
    CommonModule,
    PublicacionesRoutingModule
  ]
})
export class PublicacionesModule { }
