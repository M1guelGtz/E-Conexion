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

  private api : string = Backend_Api.Url + "usuario_has_chat/"
  chats : Chat[] = []
  user_has_chat: any[] = []
  getUsHasChatById( id_user: number ): Observable<any[]> { return this._http.get<any[]>(this.api + "by_usuario/" + id_user) }
  getUsHasChatByChat( id_user: number ): Observable<any[]> { return this._http.get<any[]>(this.api + "by_chat/" + id_user) }
  postUsHasChat( data : any ) : Observable <any> { return this._http.post<any>(this.api, data) }
  putUsHasChat( id : number ) : Observable<Chat> { return this._http.put<Chat>(this.api, id) }
  deleteUsHasChat( id : number ) : Observable<Chat> { return this._http.delete<Chat>( this.api + id ) }

  private apiChat : string = Backend_Api.Url + "chat/"
  getMyChatsById( id_user: number ): Observable<Chat> { return this._http.get<Chat>(this.apiChat + id_user) }
  postChat( data : any ) : Observable <any> { return this._http.post<any>(this.apiChat, data) }
  putChatById( id : number, data: Chat ) : Observable<Chat> { return this._http.put<Chat>(this.apiChat + id, data) }
  deleteCchat( id : number ) : Observable<Chat> { return this._http.delete<Chat>( this.apiChat + id ) }


}
