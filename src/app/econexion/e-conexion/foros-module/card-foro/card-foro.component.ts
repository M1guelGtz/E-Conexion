import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-foro',
  templateUrl: './card-foro.component.html',
  styleUrl: './card-foro.component.css'
})
export class CardForoComponent {
  
  @Input() foros: any;

}
