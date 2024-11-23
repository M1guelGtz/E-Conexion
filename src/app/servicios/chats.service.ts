import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Backend_Api } from '../../environment/environment';
import { Chat } from '../Interfaces/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor( private _http: HttpClient ) { }

  private api : string = Backend_Api.Url + "chat/"
  chats : Chat[] = []

  postChat( data : Chat ) : Observable <Chat> { return this._http.post<Chat>(this.api, data) }
  getMyChatsById( id_user: number ): Observable<Chat[]> { return this._http.get<Chat[]>(this.api + id_user) }
  putChatById( id : number ) : Observable<Chat> { return this._http.put<Chat>(this.api, id) }
  deleteCchat( id : number ) : Observable<Chat> { return this._http.delete<Chat>( this.api + id ) }


}
