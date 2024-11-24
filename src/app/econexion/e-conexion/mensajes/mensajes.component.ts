import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mensajes } from '../../../Interfaces/mensajes';
import { MensajesService } from '../../../servicios/mensajes.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.css'
})
export class MensajesComponent implements OnInit, AfterViewChecked {

  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;
  mi_id = 1
  Mensajes!: Mensajes[];
  mensaje: string = ""
  id: any
  constructor ( private route:  ActivatedRoute, public _mensaje_serviuce: MensajesService) {  }
  ngOnInit(): void {
    this.id  = this.route.snapshot.paramMap.get('id_chat')
    this._mensaje_serviuce.getMensajes(this.id).subscribe( ( mensajes ) => {
      this.Mensajes = mensajes
      console.log(this.Mensajes)
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
      }, ( e ) =>{
        console.log(e)
      }
    )
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
