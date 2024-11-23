import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Backend_Api } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  api = Backend_Api.Url + "usuarios/"
  constructor( private http: HttpClient ) { }


  getPerfil ( id : number ) : Observable<Usuario> {
    return this.http.get<Usuario>( this.api + id )
  }
}
