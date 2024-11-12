import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForosModuleRoutingModule } from './foros-module-routing.module';
import { ForosComponent } from './foros/foros.component';


@NgModule({
  declarations: [
    ForosComponent
  ],
  imports: [
    CommonModule,
    ForosModuleRoutingModule
  ]
})
export class ForosModuleModule { }
