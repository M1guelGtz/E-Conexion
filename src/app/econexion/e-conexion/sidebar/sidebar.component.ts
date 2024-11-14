import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  seemenu: boolean = true
  width : string = "w-full"
  menu(){
    this.seemenu = !this.seemenu
    this.seemenu ? this.width = "w-full" : this.width = "w-5/12" 
  }
}
