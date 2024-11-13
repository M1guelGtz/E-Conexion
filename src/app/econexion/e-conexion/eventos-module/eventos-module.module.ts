import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosModuleRoutingModule } from './eventos-module-routing.module';
import { EventosComponent } from './eventos/eventos.component';
import { CardEventoComponent } from './card-evento/card-evento.component';
import { FormEventoComponent } from './form-evento/form-evento.component';


@NgModule({
  declarations: [
    EventosComponent,
    CardEventoComponent,
    FormEventoComponent
  ],
  imports: [
    CommonModule,
    EventosModuleRoutingModule
  ]
})
export class EventosModuleModule { }
