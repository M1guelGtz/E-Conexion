import { Component, Input } from '@angular/core';
import { Donacion } from '../../../../Interfaces/donacion';
@Component({
  selector: 'app-card-donacion',
  templateUrl: './card-donacion.component.html',
  styleUrls: ['./card-donacion.component.css']
})
export class CardDonacionComponent {
  @Input() donacion!: Donacion;
}
