import { Component } from '@angular/core';
import { SidebarService } from '../../../servicios/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(public _servicio: SidebarService){
    this.seemenu = _servicio.seemenu
    this.width = _servicio.width
  }
  seemenu: any;
  width : any
  minw = "min-w-80"
  rotate = "rotate-0"
  menu(){

    this._servicio.seemenu = !this._servicio.seemenu
    //this._servicio.seemenu ? this._servicio.width = "w-full" : this._servicio.width = "w-5/12" 
    this._servicio.seemenu ? [this._servicio.sidebarWidth="w-2/12", this.rotate = "rotate-0"]  : [this._servicio.sidebarWidth ="w-[6%]", this.rotate="rotate-180"]
    this._servicio.seemenu ? this._servicio.outletWidth = "w-5/6": this._servicio.outletWidth = "w-11/12"
  }
}
