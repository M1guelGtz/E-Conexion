import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonacionesModulesRoutingModule } from './donaciones-modules-routing.module';
import { DonacionesComponent } from './donaciones/donaciones.component';
import { CardDonacionComponent } from './card-donacion/card-donacion.component';
import { FormDonacionComponent } from './form-donacion/form-donacion.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DonacionesComponent,
    CardDonacionComponent,
    FormDonacionComponent
  ],
  imports: [
    CommonModule,
    DonacionesModulesRoutingModule,
    ReactiveFormsModule
  ]
})
export class DonacionesModulesModule { }
