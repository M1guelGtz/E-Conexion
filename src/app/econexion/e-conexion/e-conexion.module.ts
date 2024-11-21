import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChatWhitUserComponent } from './chat-whit-user/chat-whit-user.component';
import { ChatComponent } from './chat/chat.component';
import { EConexionRoutingModule } from './e-conexion-routing.module';
import { EventosModuleModule } from './eventos-module/eventos-module.module';
import { ForosModuleModule } from './foros-module/foros-module.module';
import { NavComponent } from './nav/nav.component';
import { PerfilModule } from './perfil/perfil.module';
import { PublicacionesModuleModule } from './publicaciones-module/publicaciones-module.module';
import { RedComponent } from './red/red.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ListChatsComponent } from './list-chats/list-chats.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DonacionesModulesModule } from './donaciones-modules/donaciones-modules.module';


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
  ],
  imports: [
    CommonModule,
    EConexionRoutingModule,
    PublicacionesModuleModule,
    ForosModuleModule,
    EventosModuleModule,
    PerfilModule,
    DonacionesModulesModule
  ]
})
export class EConexionModule { }
