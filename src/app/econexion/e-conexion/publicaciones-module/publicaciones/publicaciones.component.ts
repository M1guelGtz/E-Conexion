import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Publicacion } from '../../../../Interfaces/publicacion';
import { PublicacionesService } from '../../../../servicios/publicaciones.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css',
})
export class PublicacionesComponent implements OnInit {
  showAlert: boolean = false;
  ngOnInit() {
    const userId = sessionStorage.getItem('alerta');
    if (userId) {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
      sessionStorage.removeItem('alerta')
    }
  }

  closeAlert() {
    this.showAlert = false;
  }
}