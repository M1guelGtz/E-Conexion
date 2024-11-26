import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Backend_Api, Token } from '../../environment/environment';
import { Eventos, EventoPut} from '../Interfaces/eventos';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) {}
  Eventos : Eventos[] = []


  obtenerEventos(): Observable<Eventos[]> {  const headers = new HttpHeaders({
    'Authorization': `Bearer ${Token.token}`
  });
    return this.http.get<Eventos[]>(Backend_Api.Url + "eventos", {headers: headers});
  }

  obtenerEventosPorUsuario(idUsuario: number): Observable<Eventos[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this.http.get<Eventos[]>(`${Backend_Api.Url}eventos/eventos/${idUsuario}`, {headers: headers});
  }

  crearEvento(evento: Eventos): Observable<Eventos> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this.http.post<Eventos>(`${Backend_Api.Url}eventos`, evento, {headers: headers});
  }
  obtenerEventoPorId(idEvento: number): Observable<Eventos> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this.http.get<Eventos>(`${Backend_Api.Url}eventos/${idEvento}`, {headers: headers});
  }

  editarEvento(idEvento: number, evento: EventoPut): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this.http.put<EventoPut>(`${Backend_Api.Url}eventos/${idEvento}`, evento, {headers: headers});
  }

  eliminarEvento(idEvento: number): Observable<void> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this.http.delete<void>(`${Backend_Api.Url}eventos/${idEvento}`, {headers: headers});
  }
}
