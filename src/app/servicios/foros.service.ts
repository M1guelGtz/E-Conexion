import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foro } from '../Interfaces/foro';
import { Backend_Api, Token } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ForosService {
 


  constructor(private http: HttpClient) {}


  listaForos: Foro[]= []

  obtenerForoPorIdChat(id: number): Observable<Foro>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this.http.get<Foro>(Backend_Api.Url + "forochat/" + id, {headers: headers})
  }


  obtenerForos(): Observable<Foro[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this.http.get<Foro[]>(Backend_Api.Url + "foro", {headers: headers});
  }

  crearForo(foro: Foro): Observable<Foro> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this.http.post<Foro>(`${Backend_Api.Url}foro` ,foro, {headers: headers});
  }

  actualizarForo(id: number, foro: Foro): Observable<Foro> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this.http.put<Foro>(`${Backend_Api.Url}foro/${id}`, foro, {headers: headers});
  }

  eliminarForo(id: number): Observable<void> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this.http.delete<void>(`${Backend_Api.Url}foro/${id}`, {headers: headers});
  }
}