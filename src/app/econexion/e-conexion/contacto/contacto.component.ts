import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  @Input() chat = {
    
  }
  handleClickGoToChat(): void {
    alert("Vamos al chat")
  }
  HandleClickEdit(): void{
    alert("Editando el chat")
  }
  handleClickDeleteChat(): void{
    alert("Eliminando el chat")
  }
  HandleClickAddContact():void{
    alert("Agregando un contacto")
  }
}
