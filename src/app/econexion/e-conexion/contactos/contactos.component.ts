import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../../Interfaces/contacto';
import { ContactosService } from '../../../servicios/contactos.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactosComponent implements OnInit {
  constructor ( private _servicio_contactos : ContactosService ) {  }
  contactos : Contacto[] = []
  id_user = 1;
  ngOnInit(): void {
      this._servicio_contactos. getMyContactosById(this.id_user).subscribe( list_contacts => {
        this.contactos = list_contacts
      })
  }
  


} 
