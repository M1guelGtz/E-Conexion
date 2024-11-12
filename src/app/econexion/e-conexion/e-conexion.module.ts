import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChatComponent } from './chat/chat.component';
import { EConexionRoutingModule } from './e-conexion-routing.module';
import { EventosComponent } from './eventos/eventos.component';
import { NavComponent } from './nav/nav.component';
import { PublicacionesModuleModule } from './publicaciones-module/publicaciones-module.module';
import { RedComponent } from './red/red.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ForosModuleModule } from './foros-module/foros-module.module';


@NgModule({
  declarations: [
    NavComponent,
    SidebarComponent,
    EventosComponent,
    RedComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    EConexionRoutingModule,
    PublicacionesModuleModule,
    ForosModuleModule
  ]
})
export class EConexionModule { }
