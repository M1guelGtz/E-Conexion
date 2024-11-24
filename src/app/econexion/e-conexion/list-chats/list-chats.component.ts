import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ChatsService } from '../../../servicios/chats.service';
import { ContactosService } from '../../../servicios/contactos.service';

@Component({
  selector: 'app-list-chats',
  templateUrl: './list-chats.component.html',
  styleUrl: './list-chats.component.css'
})
export class ListChatsComponent implements OnInit {

  constructor(private title: Title, private _user_service : ContactosService, private fb: FormBuilder, public _service_chat : ChatsService){}

  mi_id = 1
  ngOnInit(): void {
    this._service_chat.getUsHasChatById( this.mi_id ).subscribe(
      ( data ) => {
        this._service_chat.user_has_chat = data
        console.log(data);
        
      }
    )
  }
}
