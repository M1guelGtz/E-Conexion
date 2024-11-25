import { Component, OnInit } from '@angular/core';
import { ForosService } from '../../../../servicios/foros.service';

@Component({
  selector: 'app-foros',
  templateUrl: './foros.component.html',
  styleUrl: './foros.component.css'
})
export class ForosComponent implements OnInit {

  constructor(public _service_foros : ForosService){}
  foros = [];

  ngOnInit(): void {
      
  }




}
