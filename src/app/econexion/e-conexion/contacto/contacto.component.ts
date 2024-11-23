import { Component, Input } from '@angular/core';
import { Chat } from '../../../Interfaces/chat';
import { ChatsService } from '../../../servicios/chats.service';
import { ContactosService } from '../../../servicios/contactos.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  constructor( private _service_contact : ContactosService, private _service_chat : ChatsService ) {}


  chats_contacto1! : Chat[];
  chats_contacto2! : Chat[];
  myId = 1
  confirmDelete: boolean = false
  newChat:Chat = {
    id_chat : 0,
    ultimo_msj: ""
  }
  @Input() contacto = {
    usuario_correo : "",
    idlista:0,
    id_usuario: 0
  }


  handleClickGoToChat(): void {
    alert("Vamos al chat")
    this._service_chat.getMyChatsById( this.myId ).subscribe(
      ( data ) => {
        this.chats_contacto1 = data
        console.log(data, this._service_chat.chats);
        
      }
    )
    this._service_chat.getMyChatsById( this.contacto.id_usuario ).subscribe(
      ( data ) => {
        this.chats_contacto2 = data
        console.log(data, this._service_chat.chats);
      }
    )
    /*this._serv.getChats(this.idUsuario).subscribe(
      (response) => {
        this.persona1 = response
      }
    )
    this._serv.getChats(this.contacto.idUsuario).subscribe(
      (response) => {
        this.persona2 = response
      }
    )
    if(this.persona1 && this.persona2){
    for (let i = 0; i < this.persona1.length; i ++) {
      for (let j = 0; j < this.persona2.length; j++) {
        if(this.persona1[i].Chat_idChat == this.persona2[j].Chat_idChat ){
          console.log("coindiden aqui: [" + i + "][" +j + "]")
          sessionStorage.setItem("id_chat", this.persona1[i].Chat_idChat )
          this.existe = true
          this.router.navigate(['home/chat'])
        }
      }      
    }*/

  }




















  
  handleClickDeleteContact(): void{
    this._service_contact.deleteContacto(this.contacto.idlista).subscribe(
      ( data ) => {
        console.log("contacto eliminado",data)
      },
    ( e ) => console.log( "Error al eliminar al contacto" , ( e ) )
    )
  }
  handleClickAlertDeleteContact(){ this.confirmDelete = true }
  handleClickDeleteCancel(){ this.confirmDelete = false }
}
