import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { guardGuard } from '../../guard.guard';
import { ChatComponent } from './chat/chat.component';
import { ContactosComponent } from './contactos/contactos.component';
import { DonacionesComponent } from './donaciones-modules/donaciones/donaciones.component';
import { FormDonacionComponent } from './donaciones-modules/form-donacion/form-donacion.component';
import { EventosUsuarioComponent } from './eventos-module/eventos-usuario/eventos-usuario.component';
import { EventosComponent } from './eventos-module/eventos/eventos.component';
import { FormEventoComponent } from './eventos-module/form-evento/form-evento.component';
import { ListaEComponent } from './eventos-module/lista-e/lista-e.component';
import { FormforosComponent } from './foros-module/formforos/formforos.component';
import { ForosComponent } from './foros-module/foros/foros.component';
import { ListaForosComponent } from './foros-module/lista-foros/lista-foros.component';
import { MisForosComponent } from './foros-module/mis-foros/mis-foros.component';
import { ListChatsComponent } from './list-chats/list-chats.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { MiPerfilComponent } from './perfil/mi-perfil/mi-perfil.component';
import { FormPublicacionComponent } from './publicaciones-module/form-publicacion/form-publicacion.component';
import { ListaPComponent } from './publicaciones-module/lista-p/lista-p.component';
import { MisPublicacionesComponent } from './publicaciones-module/mis-publicaciones/mis-publicaciones.component';
import { PublicacionesComponent } from './publicaciones-module/publicaciones/publicaciones.component';
import { RedComponent } from './red/red.component';
import path from 'path';
import { FormActulizarPerfilComponent } from './perfil/form-actulizar-perfil/form-actulizar-perfil.component';

const routes: Routes = [
  {
    path:'red', 
    component: RedComponent,
    canActivate: [guardGuard] ,
    children: [
      {
        path: 'publicaciones',
        component: PublicacionesComponent,
        data: {animation: 'HomePage'},
        children: [
          {
            path: '',
            component: ListaPComponent
          },
          {
            path: 'formpublicacion',
            component: FormPublicacionComponent
          },{
            path: 'misPublicaciones',
            component: MisPublicacionesComponent
          },
          {
            path: "formpublicacion/:id",
            component: FormPublicacionComponent
          },
        ]
      },
        
      {
        path: 'eventos',
        component: EventosComponent,
        data: {animation: 'AboutPage'},
        children :[{
          path: '',
          component : ListaEComponent},
          {
            path: 'miseventos',
            component:EventosUsuarioComponent
          },
          { path: 'form-evento/:id'
            , component: FormEventoComponent },
            {
              path: 'formeventos',
              component: FormEventoComponent
            },
        ]
      },
      {
        path: 'foros',
        component: ForosComponent,
        children: [{
          path:'formforos',
          component: FormforosComponent
        },{
          path: "",
          component: ListaForosComponent
        },{
          path: "misforos",
          component: MisForosComponent
        }
        ]
      },
      {
        path : "Donaciones",
        component : DonacionesComponent
      },
      {
      path :"Donaciones/donacionesform",
      component : FormDonacionComponent
      },
      {
        path :"Donaciones/donacionesform/:id",
        component : FormDonacionComponent
        },
      {
        path: "chats",
        component: ChatComponent,
        children: [
          {
            path: 'with/:id_chat',
            component: MensajesComponent
          },
          {
            path: '',
            component: ListChatsComponent
          },
          {
            path: "contactos",
            component: ContactosComponent
          }
        ]
      },{
        path: '',
        component: PublicacionesComponent
      },{
        path: "perfil",
        component: MiPerfilComponent
      },
      {
        path: "actualizar_perfil",
        component: FormActulizarPerfilComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EConexionRoutingModule { }
