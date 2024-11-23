import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../Interfaces/contacto';
import { HttpClient } from '@angular/common/http';
import { Backend_Api } from '../../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  constructor( private _http: HttpClient ) { }
  private api : string = Backend_Api.Url + "lista_contacto"
  postContact( data : Contacto ) : Observable <Contacto> { return this._http.post<Contacto>(this.api, data) }
  getMyContactosById( id_user: number ): Observable<Contacto[]> { return this._http.get<Contacto[]>(this.api + id_user) }
  putContactoById( id : number ) : Observable<Contacto> { return this._http.put<Contacto>(this.api, id) }
  deleteContacto( id : number ) : Observable<Contacto> { return this._http.delete<Contacto>( this.api + id ) }
  
}
