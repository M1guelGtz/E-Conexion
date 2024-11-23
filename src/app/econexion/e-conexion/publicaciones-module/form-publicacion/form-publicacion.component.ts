import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  error: boolean = false;
  id_user = '1';
  img = null
  formdata = new FormData();
  Publicacion: FormGroup;

  constructor(private fb: FormBuilder,private router: Router,private route:  ActivatedRoute, private _service_publicaciones : PublicacionesService) {
    this.Publicacion = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id  = this.route.snapshot.paramMap.get('id')
    if(this.id){
      this.accion = "Editar"
      this._service_publicaciones.getPublicacionById(this.id).subscribe((data) => {
        console.log(data)
        this.Publicacion.patchValue({
          titulo: data.titulo,
          descripcion: data.descripcion,
          imagen: data.imagen
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
  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files) {
      const file = fileInput.files[0];
      console.log("Nombre del archivo seleccionado: ", file.name);
      file.arrayBuffer().then((buffer) => {
        const blob = new Blob([buffer], { type: file.type });
        this.formdata.append('file', blob, file.name);
      })
      console.log("Objeto imagen: ", file);
    }
  }
  publicar(): void {
    const formValues = this.Publicacion.value;
    console.log("imagen: ", formValues);
    this.formdata.append('titulo', formValues.titulo);
    this.formdata.append('descripcion', formValues.descripcion);
    this.formdata.append('id_publicaciones_usuario', this.id)
    this.formdata.append('fecha', this._service_publicaciones.getCurrentDate() )
    this.formdata.append('id_publicaciones_usuario', this.id_user)
    if(this.id){
      this._service_publicaciones.updatePublicaciones(this.id, this.formdata).subscribe((data) => {
        console.log("editado con exito", data)
        this.router.navigate(['red/publicaciones/misPublicaciones']);
        },
        (error) => {
          console.error(error);
          this.error = true;
        })
    }else{
      this._service_publicaciones.postPublicaciones(this.formdata).subscribe(data => {
        console.log("publicacion agregada con los datos:",data)
        this.router.navigate(['red/publicaciones']);
      },
        error => {
          console.error('Error al publicar:', error);
          this.error = true;
        });
    }
    console.log(this.formdata);
    
  }

  HandleClickAlertClose(){
    this.error = false;
  }
  cancelar(): void {
    if(this.id){
      this.router.navigate(['red/publicaciones/misPublicaciones']);
    }else
      this.router.navigate(['red/publicaciones']);
  }
}
