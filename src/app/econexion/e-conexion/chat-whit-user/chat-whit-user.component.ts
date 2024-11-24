import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../Interfaces/usuario';
import { ChatsService } from '../../../servicios/chats.service';
import { PerfilService } from '../../../servicios/perfil.service';

@Component({
  selector: 'app-chat-whit-user',
  templateUrl: './chat-whit-user.component.html',
  styleUrl: './chat-whit-user.component.css'
})
export class ChatWhitUserComponent implements OnInit {

  constructor ( public _service_chat: ChatsService, private _perfil: PerfilService, private router : Router ){}
  @Input() Chat = {
    chat_idchat: 0,
    usuario_idusuario: 0  
  }
  chatActual = {
    id_chat: 0,
    ultimo_msj :"",
  }
  mi_id = 1
  user : any
  userData: Usuario= {
    apellidos_usuario:"",
    correo_usuario:"",
    contraseña_usuario : "",
    id_usuario: 0,
    nombre_usuario : "",
    telefono_usuario : 0,
    estatus : "",
    imagen_usuario : "",
    tipo_usuario: "",
    descripcion: ""
  }
  ngOnInit(): void {
    this._service_chat.getUsHasChatByChat( this.Chat.chat_idchat ).subscribe(
      (data) => {
        data.map ( ( element ) => {
          if(element.usuario_idusuario != this.mi_id){
            this.user = element 
            this._perfil.getPerfilById( element.usuario_idusuario ).subscribe(
              (data) => {
                this.userData = data
                
              }
            )
          } 
          
        } )
        
      }
    )
    this._service_chat.getMyChatsById(this.Chat.chat_idchat).subscribe(
      (data) => {
        this.chatActual = data
      },
      e => {
        console.log(e);
      }
    )
  }
  
  irAlChat(){
    this.router.navigate(["/red/chats/with/" + this.Chat.chat_idchat ])
  }
}
