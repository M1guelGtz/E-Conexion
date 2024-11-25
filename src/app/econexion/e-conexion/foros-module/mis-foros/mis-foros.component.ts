import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../../../../servicios/chats.service';

@Component({
  selector: 'app-mis-foros',
  templateUrl: './mis-foros.component.html',
  styleUrl: './mis-foros.component.css'
})
export class MisForosComponent implements OnInit {
  constructor ( public _service_chat : ChatsService ) {}
  mi_id!: number
  misChats: any[]=[]
  misForos: any[]=[]
  ngOnInit(): void {
    const userIdString = sessionStorage.getItem('userId');
    if (userIdString !== null) {
      this.mi_id = Number(userIdString);
    } 
      this._service_chat.getUsHasChatById(this.mi_id).subscribe(
        response => {
          this.misChats = response
          console.log("respuesta del servidor", this.misChats);
        }
      )
    this.misChats.map( (chat ) => {
      this._service_chat.
    })
  }



}
