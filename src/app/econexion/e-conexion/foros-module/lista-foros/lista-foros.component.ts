import { Component, OnInit } from '@angular/core';
import { ForosService } from '../../../../servicios/foros.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lista-foros',
  templateUrl: './lista-foros.component.html',
  styleUrl: './lista-foros.component.css'
})
export class ListaForosComponent implements OnInit {
  constructor( public _service_foro: ForosService, private title : Title){}

  ngOnInit(): void {
      this._service_foro.obtenerForos().subscribe(
        (response) => {
          this._service_foro.listaForos = response.reverse();
          console.log(response);
          
        }
      )
      this.title.setTitle('Econexion | Foros');
  }
}
