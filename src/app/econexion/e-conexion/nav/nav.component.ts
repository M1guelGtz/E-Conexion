import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../Interfaces/usuario';
import { PerfilService } from '../../../servicios/perfil.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{

  constructor(public _perfil_service : PerfilService, private router: Router){}

  activarInput: Boolean = true;
  activarBusqueda(){
    this.activarInput = !this.activarInput; 
  }
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
    descripcion : ''
  };

  
  ngOnInit(): void {
    
    this._perfil_service.getPerfil().subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => {
        console.error('Error al obtener el perfil:', err);
      }
    });
  }
  isModalOpen = false;

  toggleModal(): void {
    this.isModalOpen = !this.isModalOpen;
  }

  logout(): void {
    this.router.navigate(['/login']);
    sessionStorage.removeItem("userId")
  }
  navigateToProfile(): void {
    this.toggleModal();
    this.router.navigate(['red/perfil']); 
  }
  
  
}
