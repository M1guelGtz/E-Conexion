import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarService } from '../../../servicios/sidebar.service';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrl: './red.component.css',
  animations: []
})
export class RedComponent {

  constructor(public _servicio: SidebarService){}

  
}
