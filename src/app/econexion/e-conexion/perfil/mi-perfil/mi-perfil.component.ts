import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Usuario } from '../../../../Interfaces/usuario';
import { PerfilService } from '../../../../servicios/perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {
  
  user: Usuario = {
    apellidos_usuario: "",
    correo_usuario: "",
    nombre_usuario: "",
    contraseña_usuario: "",
    id_usuario: 0,
    estatus: "",
    imagen_usuario: "",
    telefono_usuario: 0,
    tipo_usuario: "",
    descripcion :''
  };

  constructor(private title: Title, private _perfil_service: PerfilService , private router : Router) {}

  ngOnInit(): void {
    this.title.setTitle("Econexion | Mi perfil");

    this._perfil_service.getPerfil().subscribe({
      next: (data) => {
        this.user = data;
        console.log('Perfil obtenido:', this.user);
      },
      error: (err) => {
        console.error('Error al obtener el perfil:', err);
      }
    });
  }
  ruta(){
    this.router.navigate(['red/publicaciones/misPublicaciones'])
  }

  actualizarperfil(){
    this.router.navigate([`red/actualizar_perfil`])
  }
}