import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChatWhitUserComponent } from './chat-whit-user/chat-whit-user.component';
import { ChatComponent } from './chat/chat.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ContactosComponent } from './contactos/contactos.component';
import { DonacionesModulesModule } from './donaciones-modules/donaciones-modules.module';
import { EConexionRoutingModule } from './e-conexion-routing.module';
import { EventosModuleModule } from './eventos-module/eventos-module.module';
import { ForosModuleModule } from './foros-module/foros-module.module';
import { ListChatsComponent } from './list-chats/list-chats.component';
import { NavComponent } from './nav/nav.component';
import { PerfilModule } from './perfil/perfil.module';
import { PublicacionesModuleModule } from './publicaciones-module/publicaciones-module.module';
import { RedComponent } from './red/red.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensajesComponent } from './mensajes/mensajes.component';
import { MensajeComponent } from './mensaje/mensaje.component';


@NgModule({
  declarations: [
    NavComponent,
    SidebarComponent,
    RedComponent,
    ChatComponent,
    ChatWhitUserComponent,
    ContactosComponent,
    ListChatsComponent,
    ContactoComponent,
    MensajesComponent,
    MensajeComponent,
  ],
  imports: [
    CommonModule,
    EConexionRoutingModule,
    PublicacionesModuleModule,
    ForosModuleModule,
    EventosModuleModule,
    PerfilModule,
    DonacionesModulesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EConexionModule { }
