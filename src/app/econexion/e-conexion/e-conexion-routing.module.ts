import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { EventosComponent } from './eventos-module/eventos/eventos.component';
import { RedComponent } from './red/red.component';
import { PublicacionesComponent } from './publicaciones-module/publicaciones/publicaciones.component';
import { ForosComponent } from './foros-module/foros/foros.component';
import { FormPublicacionComponent } from './publicaciones-module/form-publicacion/form-publicacion.component';
import { FormEventoComponent } from './eventos-module/form-evento/form-evento.component';

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
        path: 'publicaciones/formpublicacion',
        component: FormPublicacionComponent
      },
      {
        path: 'eventos/formevento',
        component: FormEventoComponent
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
