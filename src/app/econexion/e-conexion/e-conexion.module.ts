import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChatComponent } from './chat/chat.component';
import { EConexionRoutingModule } from './e-conexion-routing.module';
import { NavComponent } from './nav/nav.component';
import { PublicacionesModuleModule } from './publicaciones-module/publicaciones-module.module';
import { RedComponent } from './red/red.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ForosModuleModule } from './foros-module/foros-module.module';
import { EventosModuleModule } from './eventos-module/eventos-module.module';


@NgModule({
  declarations: [
    NavComponent,
    SidebarComponent,
    RedComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    EConexionRoutingModule,
    PublicacionesModuleModule,
    ForosModuleModule,
    EventosModuleModule
  ]
})
export class EConexionModule { }
