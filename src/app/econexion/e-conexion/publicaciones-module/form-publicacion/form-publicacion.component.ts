import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacion } from '../../../../Interfaces/publicacion';
import { PublicacionesService } from '../../../../servicios/publicaciones.service';
@Component({
  selector: 'app-form-publicacion',
  templateUrl: './form-publicacion.component.html',
  styleUrl: './form-publicacion.component.css'
})
export class FormPublicacionComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  selectedFile: string | null = null;
  fileError: string | null = null;
  accion: string = ""
  id: any;
  Publicacion: FormGroup;
  constructor(private fb: FormBuilder,private router: Router,private route:  ActivatedRoute, private _service_publicaciones : PublicacionesService) {
    this.Publicacion = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }
  ngOnInit(): void {
    this.id  = this.route.snapshot.paramMap.get('id')
    if(this.id){
      this.accion = "Editar"
      this._service_publicaciones.getPublicacionById(this.id).subscribe((data) => {
        console.log(data)
        this.Publicacion.patchValue({
          titulo: data.titulo,
          descripcion: data.descripcion
        })
      },
      (error) => {
        console.error(error);
      }
    )
    }else{
      this.accion = "Crear"
    }
  }
  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const validFormats = ['image/png', 'image/jpeg'];

      if (!validFormats.includes(file.type)) {
        this.fileError = 'Solo se permiten imágenes en formato PNG o JPG';
        this.selectedFile = null;
        return;
      }

      this.fileError = null;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFile = e.target.result;
      };
      reader.readAsDataURL(file);
      console.log(reader);
      
    }
  }

  publicar(): void {
    
    const formValues = this.Publicacion.value;
    console.log(this._service_publicaciones.getCurrentDate());
    const nuevaPublicacion : Publicacion = {
      titulo: formValues.titulo,
      id_publicaciones_usuario: 1,
      fecha: this._service_publicaciones.getCurrentDate(),
      imagen: "icons8-usuario-masculino-en-círculo-100.png",
      descripcion: formValues.descripcion,
      id_publicaciones: 0,
      nombre_usuario:"Miguel Angel  "
    };
    if(this.id){
      this._service_publicaciones.updatePublicaciones(this.id, nuevaPublicacion).subscribe((data) => {
        console.log("editado con exito", data)
        this.router.navigate(['red/publicaciones/misPublicaciones']);
        },
        (error) => {
          console.error(error);
        })
    }else{
    this._service_publicaciones.postPublicaciones(nuevaPublicacion).subscribe(data => {
      console.log("publicacion agregada con los datos:",data)
    },
      error => {
        console.error('Error al publicar:', error);
      });
    this.router.navigate(['red/publicaciones']);
    }
  }

  cancelar(): void {
    if(this.id){
      this.router.navigate(['red/publicaciones/misPublicaciones']);
    }else
      this.router.navigate(['red/publicaciones']);
  }
}
