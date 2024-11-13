import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardEventosComponent } from './card-eventos/card-eventos.component';
import { EventosComponent } from './eventos/eventos.component';



@NgModule({
  declarations: [
    CardEventosComponent,
    EventosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventosModule { }
