import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Backend_Api , Token } from '../../environment/environment';
import { Chat } from '../Interfaces/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor( private _http: HttpClient ) { }

  private api : string = Backend_Api.Url + "usuario_has_chat/"
  chats : Chat[] = []
  user_has_chat: any[] = []
  getUsHasChatById( id_user: number ): Observable<any[]> { 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this._http.get<any[]>(this.api + "by_usuario/" + id_user, {headers: headers}) }
  getUsHasChatByChat( id_user: number ): Observable<any[]> { 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this._http.get<any[]>(this.api + "by_chat/" + id_user, {headers: headers}) }
  postUsHasChat( data : any ) : Observable <any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this._http.post<any>(this.api, data, {headers: headers}) }
  putUsHasChat( id : number ) : Observable<Chat> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this._http.put<Chat>(this.api, id, {headers: headers}) }
  deleteUsHasChat( id : number ) : Observable<Chat> { 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this._http.delete<Chat>( this.api + id , {headers: headers}) }

  private apiChat : string = Backend_Api.Url + "chat/"
  getMyChatsById( id_user: number ): Observable<Chat> { 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this._http.get<Chat>(this.apiChat + id_user, {headers: headers}) }
  postChat( data : any ) : Observable <any> { 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this._http.post<any>(this.apiChat, data, {headers: headers}) }
  putChatById( id : number, data: Chat ) : Observable<Chat> { 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this._http.put<Chat>(this.apiChat + id, data, {headers: headers}) }
  deleteCchat( id : number ) : Observable<Chat> { 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });
    return this._http.delete<Chat>( this.apiChat + id, {headers: headers} ) }


}
