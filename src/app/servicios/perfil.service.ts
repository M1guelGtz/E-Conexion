import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Backend_Api } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  getPerfil(): Observable<any> {
    const idUsuario = sessionStorage.getItem('userId');
    if (!idUsuario) {
      throw new Error('No se encontró el ID del usuario en el sessionStorage');
    }
    const url = `${Backend_Api.Url}usuarios/${idUsuario}`;
    return this.http.get(url);
  }
}

