import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {

  constructor(private title: Title){}
  ngOnInit(): void {
    this.title.setTitle("Econexion | Chats")
  }
  
}
