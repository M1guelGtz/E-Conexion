import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Backend_Api } from '../../environment/environment';
import { Publicacion } from '../Interfaces/publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  
  constructor(private _http: HttpClient) {}

  publicaciones: Publicacion[] = []

  getPublicaciones(): Observable<Publicacion[]>{
    return this._http.get<Publicacion[]>(Backend_Api.Url + "publicaciones")
  }
  postPublicaciones(data: FormData): Observable<Publicacion>{
    return this._http.post<Publicacion>(Backend_Api.Url + "publicaciones", data)
  }
  deletePublicaciones(id: number): Observable<Publicacion>{
    return this._http.delete<Publicacion>(Backend_Api.Url+ "publicaciones/" + id)
  }
  updatePublicaciones(id : number, data: FormData): Observable<Publicacion>{
    return this._http.put<Publicacion>(Backend_Api.Url + "publicaciones/" + id, data)
  }
  getCurrentDate(): string {
    const today = new Date().toISOString();
    console.log(today);
    return String(today);
  }
  getMisPublicaciones(id : number): Observable<Publicacion[]>{
    return this._http.get<Publicacion[]>(Backend_Api.Url + "publicaciones/" + id)
  }
  getPublicacionById(id: number): Observable<Publicacion>{
    return this._http.get<Publicacion>(Backend_Api.Url + "publicaciones/publicacionById/" + id)
  }

}
