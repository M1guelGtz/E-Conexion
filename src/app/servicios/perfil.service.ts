import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Backend_Api } from '../../environment/environment';
import { Usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  usuario: any;

  getPerfil(): Observable<any> {
    const idUsuario = sessionStorage.getItem('userId');
    if (!idUsuario) {
      throw new Error('No se encontró el ID del usuario en el sessionStorage');
    }
    const url = `${Backend_Api.Url}usuarios/${idUsuario}`;
    return this.http.get(url);
  }
  getPerfilById(id : number): Observable<Usuario>{
    return this.http.get<Usuario>(`${Backend_Api.Url}usuarios/${id}`)
  }
}

