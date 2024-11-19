import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donacion } from '../Interfaces/donacion';
import { Backend_Api } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DonacionesService {
  private apiUrl = `${Backend_Api.Url}donaciones/`;

  constructor(private http: HttpClient) {}

  obtenerDonaciones(): Observable<Donacion[]> {
    return this.http.get<Donacion[]>(this.apiUrl);
  }
  crearDonacion(donacion: Donacion): Observable<Donacion> {
    return this.http.post<Donacion>(this.apiUrl, donacion);
  }

  actualizarDonacion(id: number, donacion: Donacion): Observable<Donacion> {
    return this.http.put<Donacion>(`${this.apiUrl}${id}`, donacion);
  }

  eliminarDonacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }
}
