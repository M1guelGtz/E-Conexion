import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Donacion, Donacionput } from '../Interfaces/donacion';
import { Backend_Api ,Token} from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DonacionesService {
  private apiUrl = `${Backend_Api.Url}donaciones/`;

  constructor(private http: HttpClient) {}

  obtenerDonaciones(): Observable<Donacion[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this.http.get<Donacion[]>(this.apiUrl, {headers: headers});
  }
  obtenerDonacionesPorID ( id : number ) : Observable < Donacion > {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this.http.get< Donacion > ( this.apiUrl + id, {headers: headers})
  }
  crearDonacion(donacion: Donacion): Observable<Donacion> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this.http.post<Donacion>(this.apiUrl, donacion, {headers: headers});
  }

  actualizarDonacion(idDonacion: number, donacion: Donacionput): Observable<Donacionput> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this.http.put<Donacionput>(`${this.apiUrl}${idDonacion}`, donacion, {headers: headers});
  }

  eliminarDonacion(id: number): Observable<void> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this.http.delete<void>(`${this.apiUrl}${id}`, {headers: headers});
  }
  obtenerDonacionesPorUsuario(idUsuario: number): Observable<Donacion[]> 
  { 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this.http.get<Donacion[]>(`${this.apiUrl}donaciones_by_user/${idUsuario}`, {headers: headers}); }
}