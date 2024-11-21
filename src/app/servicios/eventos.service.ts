import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Backend_Api } from '../../environment/environment';
import { Eventos, EventoPut} from '../Interfaces/eventos';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) {}
  Eventos : Eventos[] = []


  obtenerEventos(): Observable<Eventos[]> {
    return this.http.get<Eventos[]>(Backend_Api.Url + "eventos");
  }

  obtenerEventosPorUsuario(idUsuario: number): Observable<Eventos[]> {
    return this.http.get<Eventos[]>(`${Backend_Api.Url}eventos/eventos/${idUsuario}`);
  }

  crearEvento(evento: Eventos): Observable<Eventos> {
    return this.http.post<Eventos>(`${Backend_Api.Url}eventos`, evento);
  }
  obtenerEventoPorId(idEvento: number): Observable<Eventos> {
    return this.http.get<Eventos>(`${Backend_Api.Url}eventos/${idEvento}`);
  }

  editarEvento(idEvento: number, evento: EventoPut): Observable<any> {
    return this.http.put<EventoPut>(`${Backend_Api.Url}eventos/${idEvento}`, evento);
  }

  eliminarEvento(idEvento: number): Observable<void> {
    return this.http.delete<void>(`${Backend_Api.Url}eventos/${idEvento}`);
  }
}
