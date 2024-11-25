import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../../servicios/perfil.service';
import { Usuario } from '../../../Interfaces/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  isModalOpen = false;
  modalPosition = { top: 0, left: 0 };

  constructor(private _perfil_service : PerfilService, private router: Router){}

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
        console.log('Perfil obtenido:', this.user);
      },
      error: (err) => {
        console.error('Error al obtener el perfil:', err);
      }
    });
  }
 

  openModal(buttonRef: HTMLElement): void {
    const rect = buttonRef.getBoundingClientRect();
    this.modalPosition = {
      top: rect.bottom + window.scrollY + 10, 
      left: rect.left + window.scrollX - 220
    };
    this.isModalOpen = true;
  }
  

  toggleModal(buttonRef: HTMLElement): void {
    if (this.isModalOpen) {
      this.closeModal(); 
    } else {
      this.openModal(buttonRef); 
    }
  }

  closeModal(): void {
    this.isModalOpen = false; 
  }
  
  goToProfile(): void {
    this.closeModal();
    this.router.navigate(['red/perfil']); 
  }
  
  logout(): void {
    this.closeModal(); 
    this.router.navigate(['/login']); 
  }
}