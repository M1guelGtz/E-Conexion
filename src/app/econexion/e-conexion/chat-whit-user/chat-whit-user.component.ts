import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-whit-user',
  templateUrl: './chat-whit-user.component.html',
  styleUrl: './chat-whit-user.component.css'
})
export class ChatWhitUserComponent {

  @Input() chat = {
    nombreChat: "",
    idChat: 0,
    mensajesEspera: 0,
    ultimoMsj: "",
    horaUltimoMsj:""
  }
  irAlChat(){
    alert("al chat")
  }
}
