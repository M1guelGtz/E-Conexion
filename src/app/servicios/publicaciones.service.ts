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


  getPublicaciones(): Observable<Publicacion[]>{
    return this._http.get<Publicacion[]>(Backend_Api.Url + "publicaciones")
  }
  postPublicaciones(data: Publicacion): Observable<Publicacion>{
    return this._http.post<Publicacion>(Backend_Api.Url + "publicaciones", data)
  }
  deletePublicaciones(id: number): Observable<Publicacion>{
    return this._http.delete<Publicacion>(Backend_Api.Url + id)
  }
  updatePublicaciones(id : number, data: Publicacion): Observable<Publicacion>{
    return this._http.put<Publicacion>(Backend_Api.Url + id, data)
  }
  getCurrentDate(): string {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  }

}
