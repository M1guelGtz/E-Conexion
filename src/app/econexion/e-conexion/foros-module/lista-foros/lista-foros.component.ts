import { Component, OnInit } from '@angular/core';
import { ForosService } from '../../../../servicios/foros.service';

@Component({
  selector: 'app-lista-foros',
  templateUrl: './lista-foros.component.html',
  styleUrl: './lista-foros.component.css'
})
export class ListaForosComponent implements OnInit {
  constructor( public _service_foro: ForosService ){}

  ngOnInit(): void {
      this._service_foro.obtenerForos().subscribe(
        (response) => {
          this._service_foro.listaForos = response;
          console.log(response);
          
        }
      )
  }
}
