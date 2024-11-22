import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foro } from '../Interfaces/foro';
import { Backend_Api } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ForosService {
 

  constructor(private http: HttpClient) {}

  obtenerForos(): Observable<Foro[]> {
    return this.http.get<Foro[]>(Backend_Api.Url);
  }

  crearForo(foro: Foro): Observable<Foro> {
    return this.http.post<Foro>(Backend_Api.Url, foro);
  }

  actualizarForo(id: number, foro: Foro): Observable<Foro> {
    return this.http.put<Foro>(`${Backend_Api.Url}/${id}`, foro);
  }

  eliminarForo(id: number): Observable<void> {
    return this.http.delete<void>(`${Backend_Api.Url}/${id}`);
  }
}