import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacion } from '../../../../Interfaces/publicacion';
import { PublicacionesService } from '../../../../servicios/publicaciones.service';

@Component({
  selector: 'app-card-mis-publicaciones',
  templateUrl: './card-mis-publicaciones.component.html',
  styleUrl: './card-mis-publicaciones.component.css'
})
export class CardMisPublicacionesComponent {

  constructor(private _servicio_publicaciones: PublicacionesService, private _router: Router){}
  // --------- variables -----------
  
  menu : boolean= false;
  editando : boolean = false;
  error = false

  // ---------- interfaces ----------
  @Input() publicacion: Publicacion = {
    id_publicaciones_usuario: 0,
    imagen: "",
    descripcion: "",
    fecha: "",
    id_publicaciones: 0,
    nombre_usuario: "",
    titulo: ""
  }
  desplegarOpciones(){
    this.menu = !this.menu
  }
  eliminarPublicacion(){
    this.error = true
  }
  cancelarEliminarPublicacion(){
    this.error = false
  }

  HandleClickAlertClose(){
    this._servicio_publicaciones.deletePublicaciones(this.publicacion.id_publicaciones).subscribe(data =>{
      console.log("publicaion eliminada correctamente")
      this.error = false
    },
    error => {
      console.error('Error al agregar mensaje:', error);
      alert("no se pudo eliminar")
    });
    let aux: any[] = []
    this._servicio_publicaciones.publicaciones.map((element) => {
      if(element.id_publicaciones != this.publicacion.id_publicaciones){
        aux.push(element)
      }
    })
    this._servicio_publicaciones.publicaciones = aux
  }
  handleClickEditar(): void {
    this._router.navigate(["red/publicaciones/formpublicacion", this.publicacion.id_publicaciones])
  }
}
