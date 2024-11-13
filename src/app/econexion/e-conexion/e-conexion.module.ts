import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EConexionRoutingModule } from './e-conexion-routing.module';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EventosComponent } from './eventos/eventos/eventos.component';
import { ForosComponent } from './foros/foros.component';
import { RedComponent } from './red/red.component';
import { CardEventosComponent } from './eventos/card-eventos/card-eventos.component';
import { PublicacionesModule } from './publicaciones/publicaciones.module';
import { EventosModule } from './eventos/eventos.module';



@NgModule({
  declarations: [
    NavComponent,
    SidebarComponent,
    ForosComponent,
    RedComponent,
  ],
  imports: [
    CommonModule,
    EConexionRoutingModule,
    EventosModule,
    PublicacionesModule
  ]
})
export class EConexionModule { }
