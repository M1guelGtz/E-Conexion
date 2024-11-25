import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../../../servicios/contactos.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactosComponent implements OnInit {
  constructor ( public _servicio_contactos : ContactosService ) {  }
  id_user ! : number;
  ngOnInit(): void {
    const userIdString = sessionStorage.getItem('userId');
    if (userIdString !== null) {
      this.id_user = Number(userIdString);
    }
      this._servicio_contactos. getMyContactosById(this.id_user).subscribe( list_contacts => {
        this._servicio_contactos.contactos = list_contacts
        
      }, e =>{
        console.log("error", e)
      }
    )
  }
  agregarContacto(){
    this._servicio_contactos.modal = true
  }


} 


