import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Usuario } from '../../../../Interfaces/usuario';
import { ChatsService } from '../../../../servicios/chats.service';
import { ForosService } from '../../../../servicios/foros.service';
import { PerfilService } from '../../../../servicios/perfil.service';

@Component({
  selector: 'app-card-foro',
  templateUrl: './card-foro.component.html',
  styleUrl: './card-foro.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CardForoComponent implements OnInit {
  
  @Input() Foro: any;
  @Input() miForo: any;
  foroActual!: any;

  user: Usuario = {
    apellidos_usuario: "",
    correo_usuario: "",
    contraseña_usuario: "",
    id_usuario: 0,
    nombre_usuario: "",
    telefono_usuario: 0,
    estatus: "",
    imagen_usuario: "",
    tipo_usuario: "",
    descripcion: ""
  };

  boton = "Unirme";
  mi_id!: number;

  constructor(
    private routeA: ActivatedRoute, 
    private _service_perfil: PerfilService, 
    private route: Router, 
    private _service_chat: ChatsService, 
    private _service_foros: ForosService 
  ) { }

  ngOnInit(): void {
    const userIdString = sessionStorage.getItem('userId');
    if (userIdString !== null) {
      this.mi_id = Number(userIdString);
    }

    const routeSnapshot = this.routeA.snapshot;
    if (routeSnapshot.url[0].path === "misforos") {
      this.boton = "Abrir";
      console.log(this.Foro.id_chat);

      forkJoin({
        foro: this._service_foros.obtenerForoPorIdChat(this.Foro.id_chat),
        perfil: this._service_perfil.getPerfilById(this.Foro.id_usuario)
      }).subscribe(
        ({ foro, perfil }) => {
          console.log('Foro:', foro);
          console.log('Perfil:', perfil);
          this.Foro = foro;
          this.user = perfil;
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this._service_perfil.getPerfilById(this.Foro.id_usuario).subscribe(
        (response) => {
          console.log(response);
          this.user = response;
        },
        error => console.log(error)
      );
    }
  }

  alChat() {
    let us_has_chat = {
      usuario_idusuario: this.mi_id,
      chat_idchat: this.Foro.id_chat
    };

    this._service_chat.postUsHasChat(us_has_chat).subscribe(
      (response) => {
        console.log("añadido al foro: ", response);
      },
      error => {
        console.log(error);
      }
    );

    this.route.navigate(["/red/chats/with/" + this.Foro.id_chat]);
  }
}
