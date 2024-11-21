import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SiderbarService {
  //Oberservar o estado do siderbar
  private sidebarStatus = new BehaviorSubject<boolean>(false); // false significa que está fechado

  constructor() { }

  // Método para obter o estado atual do sidebar
  getSidebarStatus() {
    return this.sidebarStatus.asObservable();
  }

  // Método para alternar o estado do sidebar
  alterarSidebar() {
    this.sidebarStatus.next(!this.sidebarStatus.value);
  }
}
