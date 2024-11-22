import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Donacion, Donacionput } from '../Interfaces/donacion';
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
  obtenerDonacionesPorID ( id : number ) : Observable < Donacion > {
    return this.http.get< Donacion > ( this.apiUrl + id)
  }
  crearDonacion(donacion: Donacion): Observable<Donacion> {
    return this.http.post<Donacion>(this.apiUrl, donacion);
  }

  actualizarDonacion(idDonacion: number, donacion: Donacionput): Observable<Donacionput> {
    return this.http.put<Donacionput>(`${this.apiUrl}${idDonacion}`, donacion);
  }

  eliminarDonacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }

}

