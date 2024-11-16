import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  seemenu: boolean = true
  width : string = "w-full"
  sidebarWidth: string = "w-2/12"
  outletWidth: string = "w-10/12"

}
