import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { ForosComponent } from './foros/foros.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { RedComponent } from './red/red.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EConexionRoutingModule { }
