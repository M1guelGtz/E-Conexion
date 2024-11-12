import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { EventosComponent } from './eventos/eventos.component';
import { RedComponent } from './red/red.component';
import { PublicacionesComponent } from './publicaciones-module/publicaciones/publicaciones.component';
import { ForosComponent } from './foros-module/foros/foros.component';

const routes: Routes = [
  {
    path:'red', 
    component: RedComponent,
    children: [
      {
        path: 'publicaciones',
        component: PublicacionesComponent
      },{
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: 'eventos',
        component: EventosComponent
      },
      {
        path: 'foros',
        component: ForosComponent
      },
      {
        path: "chats",
        component: ChatComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EConexionRoutingModule { }
