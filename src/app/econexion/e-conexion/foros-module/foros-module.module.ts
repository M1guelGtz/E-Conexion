import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForosModuleRoutingModule } from './foros-module-routing.module';
import { ForosComponent } from './foros/foros.component';
import { FormforosComponent } from './formforos/formforos.component';
import { CardForoComponent } from './card-foro/card-foro.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ForosComponent,
    FormforosComponent,
    CardForoComponent
  ],
  imports: [
    CommonModule,
    ForosModuleRoutingModule,
    ReactiveFormsModule
  ]
})
export class ForosModuleModule { }
