import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../Interfaces/login';
import { Backend_Api, Token } from '../../environment/environment';

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


  saveToken(access_token: string): void {
    Token.token = access_token; 
    console.log('Token guardado:', access_token); 
  }
}
