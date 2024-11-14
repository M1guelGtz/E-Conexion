import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrl: './mi-perfil.component.css'
})
export class MiPerfilComponent implements OnInit {

  constructor(private title: Title){}

  ngOnInit(): void {
    this.title.setTitle("Econexion | Mi perfil")
  }
}
