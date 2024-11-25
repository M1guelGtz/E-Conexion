import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosModuleRoutingModule } from './eventos-module-routing.module';
import { EventosComponent } from './eventos/eventos.component';
import { CardEventoComponent } from './card-evento/card-evento.component';
import { FormEventoComponent } from './form-evento/form-evento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventosUsuarioComponent } from './eventos-usuario/eventos-usuario.component';
import { ListaEComponent } from './lista-e/lista-e.component';



@NgModule({
  declarations: [
    EventosComponent,
    CardEventoComponent,
    FormEventoComponent,
    EventosUsuarioComponent,
    ListaEComponent
  ],
  imports: [
    CommonModule,
    EventosModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EventosModuleModule { }
