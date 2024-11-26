import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Backend_Api, Token } from '../../environment/environment';
import { Usuario } from '../Interfaces/usuario';
@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  chatWith_user : Usuario={
    apellidos_usuario:"",
    contraseña_usuario:"",
    correo_usuario:"",
    descripcion:"",
    estatus:"",
    id_usuario:0,
    imagen_usuario:"",
    nombre_usuario:"",
    telefono_usuario:0,
    tipo_usuario:"",
  }
  usuario: any;

  getPerfil(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token}`
    });
    const idUsuario = sessionStorage.getItem('userId');
    if (!idUsuario) {
      throw new Error('No se encontró el ID del usuario en el sessionStorage');
    }
    const url = `${Backend_Api.Url}usuarios/${idUsuario}`;
    return this.http.get(url, {headers: headers});
  }
  getPerfilById(id : number): Observable<Usuario>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token}`
    });
    return this.http.get<Usuario>(`${Backend_Api.Url}usuarios/${id}`, {headers});
  }
}

