import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Chat } from '../../../Interfaces/chat';
import { ChatsService } from '../../../servicios/chats.service';
import { ContactosService } from '../../../servicios/contactos.service';
import { PerfilService } from '../../../servicios/perfil.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {
  constructor(
    private _service_contact: ContactosService,
    private _service_chat: ChatsService,
    private router: Router,
    private _perfil_service : PerfilService
  ) {}
  ngOnInit(): void {
    const userIdString = sessionStorage.getItem('userId');
    if (userIdString !== null) {
      this.myId = Number(userIdString);
    } 
  }
  chats_contacto1: any[] = [];
  chats_contacto2: any[] = [];
  myId!: number
  existe: boolean = false;
  confirmDelete: boolean = false;
  newChat: Chat = {
    id_chat: 0,
    ultimo_msj: "",
    grupal: false
  };

  @Input() contacto = {
    usuario_correo: "",
    idlista: 0,
    id_usuario: 0
  };

  coinciden() {
    this.existe = true;
  }

  handleClickGoToChat(): void {
    alert("Vamos al chat");

    // Verifica ambos conjuntos de datos usando forkJoin
    forkJoin([
      this._service_chat.getUsHasChatById(this.contacto.id_usuario),
      this._service_chat.getUsHasChatById(this.myId)
    ]).subscribe(
      ([chatsContacto, chatsUsuario]) => {
        const chatExistente = chatsContacto.find((chat1) =>
          chatsUsuario.some((chat2) => chat1.chat_idchat === chat2.chat_idchat)
        );

        if (chatExistente) {
          this.existe = true;
          this._perfil_service.getPerfilById(this.contacto.id_usuario).subscribe( contacto => {
            this._perfil_service.chatWith_user = contacto
            console.log(contacto);
          })
          this.router.navigate(["/red/chats/with/" + chatExistente.chat_idchat]);

        } else {
          this.existe = false;
          this.noexiste();
        }
      },
      (error) => console.error("Error al obtener los chats:", error)
    );
  }

  noexiste() {
    let chat = {
      ultimo_msj: "",
      grupal: false
    };
    this._service_chat.postChat(chat).subscribe(
      (response) => {
        console.log('Nuevo chat agregado:', response);
        let valor = {
          usuario_idusuario: this.contacto.id_usuario,
          chat_idchat: response.id_chat
        };
        this._service_chat.postUsHasChat(valor).subscribe(
          (response) => {
            console.log('Nuevo usuario agregado a chat:', response);
          },
          (error) => {
            console.log("error al ir al chat", error);
          }
        );
        let uschat = {
          chat_idchat: response.id_chat,
          usuario_idusuario: this.myId
        };
        this._service_chat.postUsHasChat(uschat).subscribe(
          (response) => {
            console.log('Nuevo usuario agregado a chat:', response);
            this.router.navigate(["/red/chats/with/" + response.chat_idchat]);
          },
          (error) => {
            console.log("error al ir al chat", error);
          }
        );
      },
      (error) => {
        console.error('Error al agregar nuevo chat:', error);
      }
    );
  }

  handleClickDeleteContact(): void {
    this._service_contact.deleteContacto(this.contacto.idlista).subscribe(
      (data) => {
        console.log("contacto eliminado", data);
      },
      (e) => console.log("Error al eliminar al contacto", e)
    );
    this.confirmDelete = false
  }

  handleClickAlertDeleteContact() {
    this.confirmDelete = true;
  }

  handleClickDeleteCancel() {
    this.confirmDelete = false;
  }
}
