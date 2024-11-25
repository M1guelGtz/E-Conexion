import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Contacto } from '../../../Interfaces/contacto';
import { ChatsService } from '../../../servicios/chats.service';
import { ContactosService } from '../../../servicios/contactos.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {

  constructor(private title: Title, public _user_service : ContactosService, private fb: FormBuilder, private _service_chat : ChatsService){

    this.Formulario = this.fb.group({
      usuario_correo: ['', [Validators.required, Validators.email]],
      id_usuario : sessionStorage.getItem('userId')
    });
  }
  Formulario: FormGroup;
  modalAddContact: boolean = false;
  mi_id! : number

  ngOnInit(): void {
    const userIdString = sessionStorage.getItem('userId');
    if (userIdString !== null) {
      this.mi_id = Number(userIdString);
    }
    this.title.setTitle("Econexion | Chats")
    
  }
  HandleClickOpenAddContact():void{ this._user_service.modal = true }

  handleClickCloseModalAddContact(){ this._user_service.modal = false }
  handleClickAddContact(){
    let contacto : Contacto = this.Formulario.value
    this._user_service.postContact(contacto).subscribe(data => {
      console.log(data)
      this._user_service.contactos.push(data)
    }, 
    ( e ) => {
      console.log("error", e);
    }
  ) 
  this.Formulario.reset({
    usuario_correo: '', 
    id_usuario: this.Formulario.get('id_usuario')?.value 
  });
  this._user_service.modal = false

  }
  HandleClickAddContact(){}
}
