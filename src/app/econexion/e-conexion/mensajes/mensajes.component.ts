import { AfterViewChecked, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mensajes } from '../../../Interfaces/mensajes';
import { ChatsService } from '../../../servicios/chats.service';
import { MensajesService } from '../../../servicios/mensajes.service';
import { PerfilService } from '../../../servicios/perfil.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.css'
})
export class MensajesComponent implements OnInit, AfterViewChecked, OnDestroy{

  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;
  mi_id! : number
  Mensajes: Mensajes[] = []
  mensaje: string = ""
  id: any
  constructor (private _chat_service: ChatsService, private route:  ActivatedRoute, public _mensaje_serviuce: MensajesService, private _perfil: PerfilService) {  }
  ngOnInit(): void {
    const userIdString = sessionStorage.getItem('userId');
    if (userIdString !== null) {
      this.mi_id = Number(userIdString);
    } 
    this.id  = this.route.snapshot.paramMap.get('id_chat')
    this._mensaje_serviuce.getMensajes(this.id).subscribe( ( mensajes ) => {
      this.Mensajes = mensajes
      this.scrollToBottom()
    } )
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  enviarMensaje(){
    let mensaje: Mensajes = {
      id_chat: this.id,
      estatus: "false",
      id_emisor: this.mi_id,
      mensaje:this.mensaje,
      fecha: new Date().toISOString(),
      id_mensaje: 0
    }
    this._mensaje_serviuce.postMensaje(mensaje).subscribe(
      (res) => {
        console.log(res)
        this.scrollToBottom()
        this.Mensajes.push(res)
      }, ( e ) =>{
        console.log(e)
      }
    )
    let chat={
      ultimo_msj: this.mensaje ,
      grupal: false,
      id_chat: this.id

    }
    this._chat_service.putChatById(this.id, chat).subscribe(
      (res) => {
        console.log("chat actualizado", res);
      },
      e => console.log(e)
      
    )
    this.mensaje = ""
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
  ngOnDestroy(): void {
      this._perfil.chatWith_user ={
        apellidos_usuario:"",
        contraseña_usuario:"",
        correo_usuario:"",
        descripcion:"",
        estatus:"",
        id_usuario:0,
        imagen_usuario:"",
        nombre_usuario:"",
        telefono_usuario:0,
        tipo_usuario:"",
      }
  }
}
