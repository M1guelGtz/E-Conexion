import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EConexionRoutingModule } from './e-conexion-routing.module';
import { NavComponent } from './nav/nav.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EventosComponent } from './eventos/eventos.component';
import { ForosComponent } from './foros/foros.component';
import { RedComponent } from './red/red.component';


@NgModule({
  declarations: [
    NavComponent,
    PublicacionesComponent,
    SidebarComponent,
    EventosComponent,
    ForosComponent,
    RedComponent
  ],
  imports: [
    CommonModule,
    EConexionRoutingModule
  ]
})
export class EConexionModule { }
