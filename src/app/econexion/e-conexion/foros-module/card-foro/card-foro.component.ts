import { Component, Input, OnInit} from '@angular/core';
import { PerfilService } from '../../../../servicios/perfil.service';
import { Usuario } from '../../../../Interfaces/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatsService } from '../../../../servicios/chats.service';
import { ForosService } from '../../../../servicios/foros.service';


@Component({
  selector: 'app-card-foro',
  templateUrl: './card-foro.component.html',
  styleUrl: './card-foro.component.css'
})
export class CardForoComponent implements OnInit {
  
  constructor( private routeA: ActivatedRoute , private _service_perfil: PerfilService, private route: Router, private _service_chat: ChatsService, private _service_foros: ForosService ) { }
  @Input() Foro: any;
  @Input() miForo: any
  foroAcrua!:any
  user:Usuario = {
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

  boton = "Unirme"

  mi_id! : number;
  ngOnInit(): void {
    const routeSnapshot = this.routeA.snapshot;
    if(routeSnapshot.url[0].path == "misforos"){
      this.boton="Abrir"
      console.log(this.Foro.id_chat);
      this._service_foros.obtenerForoPorIdChat(this.Foro.id_chat).subscribe
      (element =>{
        console.log(element);
        this.Foro = element
      },
    error =>{
      console.log(error);
      
    })
    }else{ 

  
    const userIdString = sessionStorage.getItem('userId');
    if (userIdString !== null) {
      this.mi_id = Number(userIdString);
    } 
      this._service_perfil.getPerfilById(this.Foro.id_usuario).subscribe(
        ( response ) => {
          console.log(response);
          this.user = response
          
        },
        error => console.log(error)
      )
    }
  }

  alChat(){
    let us_has_chat = {
      usuario_idusuario: this.mi_id,
      chat_idchat: this.Foro.id_chat
    }
    this._service_chat.postUsHasChat(us_has_chat).subscribe(
      ( response ) => {
        console.log("añadido al foro: ", response)
      },
      error => {
        console.log(error);
        
      }
    )
    this.route.navigate(["/red/chats/with/" + this.Foro.id_chat])
    alert("alChat")
  }
}
