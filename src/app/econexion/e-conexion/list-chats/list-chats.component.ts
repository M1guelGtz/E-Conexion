import { Component } from '@angular/core';

@Component({
  selector: 'app-list-chats',
  templateUrl: './list-chats.component.html',
  styleUrl: './list-chats.component.css'
})
export class ListChatsComponent {

  chats = [
    {
      nombreChat: "Rodrigo Emilio",
      idChat: 0,
      mensajesEspera: 5,
      ultimoMsj: "hola, como estas?",
      horaUltimoMsj:"10:22"
    },{
      nombreChat: "Carlos Daniel",
      idChat: 1,
      mensajesEspera: 5,
      ultimoMsj: "hey, que paso?",
      horaUltimoMsj:"10:22"
    },{
      nombreChat: "Miguel Angel",
      idChat: 2,
      mensajesEspera: 5,
      ultimoMsj: "apenas vi tu mensaje",
      horaUltimoMsj:"10:22"
    },{
      nombreChat: "Rodrigo Emilio",
      idChat: 0,
      mensajesEspera: 5,
      ultimoMsj: "hola, como estas?",
      horaUltimoMsj:"10:22"
    },{
      nombreChat: "Carlos Daniel",
      idChat: 1,
      mensajesEspera: 5,
      ultimoMsj: "hey, que paso?",
      horaUltimoMsj:"10:22"
    },{
      nombreChat: "Miguel Angel",
      idChat: 2,
      mensajesEspera: 5,
      ultimoMsj: "apenas vi tu mensaje",
      horaUltimoMsj:"10:22"
    },{
      nombreChat: "Rodrigo Emilio",
      idChat: 0,
      mensajesEspera: 5,
      ultimoMsj: "hola, como estas?",
      horaUltimoMsj:"10:22"
    },{
      nombreChat: "Carlos Daniel",
      idChat: 1,
      mensajesEspera: 5,
      ultimoMsj: "hey, que paso?",
      horaUltimoMsj:"10:22"
    },{
      nombreChat: "Miguel Angel",
      idChat: 2,
      mensajesEspera: 5,
      ultimoMsj: "apenas vi tu mensaje",
      horaUltimoMsj:"10:22"
    },
  ]
}
