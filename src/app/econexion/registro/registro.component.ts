import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {

  constructor ( private title: Title){}

  ngOnInit(): void {
    this.title.setTitle("Econexion | Registro")
}
}
