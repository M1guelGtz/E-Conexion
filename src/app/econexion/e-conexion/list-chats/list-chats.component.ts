import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ChatsService } from '../../../servicios/chats.service';
import { ContactosService } from '../../../servicios/contactos.service';

@Component({
  selector: 'app-list-chats',
  templateUrl: './list-chats.component.html',
  styleUrl: './list-chats.component.css'
})
export class ListChatsComponent implements OnInit, OnDestroy {

  constructor(private title: Title, private _user_service : ContactosService, private fb: FormBuilder, public _service_chat : ChatsService){}

  mi_id ! : number
  ngOnInit(): void {
    const userIdString = sessionStorage.getItem('userId');
    if (userIdString !== null) {
      this.mi_id = Number(userIdString);
    } 
    this._service_chat.getUsHasChatById( this.mi_id ).subscribe(
      ( data ) => {
        data.map( ( chats ) => {
          this._service_chat.getMyChatsById(chats.chat_idchat).subscribe( (chat) => {
            console.log(chat);
            chat.grupal == false ? [this._service_chat.user_has_chat.push(chats), console.log("Añdido a chats")]
            : ""
          },
        error => console.log(error)
        )
        })
        
      }, e => console.log(e)
      
    )
  }
  ngOnDestroy(): void {
      this._service_chat.user_has_chat = []
  }
}
