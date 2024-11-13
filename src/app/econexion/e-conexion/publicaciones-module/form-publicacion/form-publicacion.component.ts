import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PublicacionesService } from '../../../../servicios/publicaciones.service';
@Component({
  selector: 'app-form-publicacion',
  templateUrl: './form-publicacion.component.html',
  styleUrl: './form-publicacion.component.css'
})
export class FormPublicacionComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  selectedFile: string | null = null;
  fileError: string | null = null;

  constructor(private router: Router, private publicacionesService: PublicacionesService) {}

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
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
    }
  }

  publicar(titulo: string, descripcion: string): void {
    const nuevaPublicacion = {
      titulo: titulo,
      usuario: 'Usuario Actual',
      fecha: this.publicacionesService.getCurrentDate(),
      imagen: this.selectedFile,
      descripcion: descripcion
    };

    this.publicacionesService.agregarPublicacion(nuevaPublicacion);
    this.router.navigate(['red/publicaciones']);
  }

  cancelar(): void {
    this.router.navigate(['red/publicaciones']);
  }
}
