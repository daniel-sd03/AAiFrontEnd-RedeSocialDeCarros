import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from '../carro';
import { Usuario } from '../usuario';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  urlCarro = 'http://localhost:3000/carros';


  constructor(private http: HttpClient) {}
  getCarros(): Observable<Carro[]>{
    return this.http.get<Carro[]>(this.urlCarro);
  }


}
