import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForosService } from '../../../../servicios/foros.service'; 
@Component({
  selector: 'app-formforos',
  templateUrl: './formforos.component.html',
  styleUrl: './formforos.component.css'
})
export class FormforosComponent implements OnInit{
  foroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private forosService: ForosService
  ) {}

  ngOnInit(): void {
    this.foroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.foroForm.valid) {
      this.forosService.crearForo(this.foroForm.value).subscribe(() => {
        alert('Foro creado con éxito');
        this.router.navigate(['/foros']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/foros']);
  }
}
