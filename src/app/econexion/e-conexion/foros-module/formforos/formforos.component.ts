import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Chat } from '../../../../Interfaces/chat';
import { Foro } from '../../../../Interfaces/foro';
import { ChatsService } from '../../../../servicios/chats.service';
import { ForosService } from '../../../../servicios/foros.service';
@Component({
  selector: 'app-formforos',
  templateUrl: './formforos.component.html',
  styleUrl: './formforos.component.css'
})
export class FormforosComponent implements OnInit{
  foroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private forosService: ForosService, private _service_chat : ChatsService
  ) {}

  mi_id! : number;
  ngOnInit(): void {
    const userIdString = sessionStorage.getItem('userId');
    if (userIdString !== null) {
      this.mi_id = Number(userIdString);
    } 
    this.foroForm = this.fb.group({
      nombre_foro: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.foroForm.valid) {
      let chat : Chat = {
        grupal: true,
        id_chat : 0,
        ultimo_msj : ''
      }
      this._service_chat.postChat(chat).subscribe(
        (response) => {
          console.log("chat creado con el id", response.id_chat);
          let foro : Foro = {
            descripcion: this.foroForm.get('descripcion')?.value,
            nombre_foro: this.foroForm.get("nombre_foro")?.value,
            id_chat: response.id_chat,
            id_usuario: this.mi_id
          }
          this.forosService.crearForo(foro).subscribe((response) => {
            console.log("foro creado con los datos; ", response);
            
            this.router.navigate(['red/foros']);
          }, 
          imprimeElErroRodrix  => console.log(imprimeElErroRodrix)
          
        );
        },
        e => console.log(e)
        
      )
    }
  }

  cancelar(): void {
    this.router.navigate(['red/foros']);
  }
}
