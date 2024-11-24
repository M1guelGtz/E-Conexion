import { Injectable } from '@angular/core';
import { Backend_Api } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Mensajes } from '../Interfaces/mensajes';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private http: HttpClient) {}
  api_url = Backend_Api.Url + "mensajes/"

  getMensajes(id_chat: number): Observable<Mensajes[]> {
    return this.http.get<Mensajes[]>(`${this.api_url}mensajeschat_byID/` + id_chat);
  }
  postMensaje ( mensaje: Mensajes ): Observable<Mensajes>{
    return this.http.post<Mensajes>(this.api_url , mensaje);
  }

}
