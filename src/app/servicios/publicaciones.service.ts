import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Backend_Api , Token} from '../../environment/environment';
import { Publicacion } from '../Interfaces/publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${Token.token}`,
    });
  }
  
  constructor(private _http: HttpClient) {}

  publicaciones: Publicacion[] = []

  getPublicaciones(): Observable<Publicacion[]> {
    return this._http.get<Publicacion[]>(Backend_Api.Url + 'publicaciones', {
      headers: this.getHeaders(),
    });
  }

  postPublicaciones(data: FormData): Observable<Publicacion>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this._http.post<Publicacion>(Backend_Api.Url + "publicaciones", data, {headers: headers})
  }
  deletePublicaciones(id: number): Observable<Publicacion>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this._http.delete<Publicacion>(Backend_Api.Url+ "publicaciones/" + id, {headers: headers})
  }
  updatePublicaciones(id : number, data: FormData): Observable<Publicacion>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this._http.put<Publicacion>(Backend_Api.Url + "publicaciones/" + id, data, {headers: headers})
  }
  getCurrentDate(): string {
    const today = new Date().toISOString();
    console.log(today);
    return String(today);
  }
  getMisPublicaciones(id : number): Observable<Publicacion[]>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this._http.get<Publicacion[]>(Backend_Api.Url + "publicaciones/" + id, {headers: headers})
  }
  getPublicacionById(id: number): Observable<Publicacion>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this._http.get<Publicacion>(Backend_Api.Url + "publicaciones/publicacionById/" + id, {headers: headers})
  }

}
