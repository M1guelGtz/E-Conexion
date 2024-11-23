import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../Interfaces/login';
import { Backend_Api, Token } from '../../environment/environment';
import { Usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  
  login(credentials: { correo_usuario: string; contrasena_usuario: string }): Observable<Login> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('correo_usuario', credentials.correo_usuario);
    body.set('contrasena_usuario', credentials.contrasena_usuario);
    console.log('Datos enviados:', body.toString()); 
    return this.http.post<Login>(`${Backend_Api.Url}usuarios/login`, body.toString(), { headers });
  }

  registrarUsuarioConImagen(usuario: any, imagen: File): Observable<any> {
    const formData = new FormData();
    formData.append('nombre_usuario', usuario.nombre_usuario);
    formData.append('apellidos_usuario', usuario.apellidos_usuario);
    formData.append('correo_usuario', usuario.correo_usuario);
    formData.append('contrasena_usuario', usuario.contrasena_usuario);
    formData.append('telefono_usuario', usuario.telefono_usuario);
    formData.append('tipo_usuario', usuario.tipo_usuario);
    formData.append('estatus', usuario.estatus);
    formData.append('file', imagen); 
  
    return this.http.post(`${Backend_Api.Url}usuarios/register`, formData);
  }
  
  saveToken(access_token: string): void {
    Token.token = access_token; 
    console.log('Token guardado:', access_token); 
  }
}
