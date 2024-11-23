import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Contacto } from '../../../Interfaces/contacto';
import { ContactosService } from '../../../servicios/contactos.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  constructor(private title: Title, private _user_service : ContactosService, private fb: FormBuilder){
    this.Formulario = this.fb.group({
      usuario_correo: ['', [Validators.required, Validators.email]],
      id_usuario : 1
    });
  }
  Formulario: FormGroup;
  modalAddContact: boolean = false;

  ngOnInit(): void {
    this.title.setTitle("Econexion | Chats")
  }
  HandleClickOpenAddContact():void{ this.modalAddContact = true }

  handleClickCloseModalAddContact(){ this.modalAddContact = false }
  handleClickAddContact(){
    let contacto : Contacto = this.Formulario.value
    this.modalAddContact ?
    this._user_service.postContact(contacto).subscribe(data => {
      console.log(data)
    }, 
    ( e ) => {
      console.log("error", e);
    }
  ) : 
    this.modalAddContact = false

  }
  HandleClickAddContact(){}
}
