import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { publicacao } from '../../publicacao';

@Injectable({
  providedIn: 'root'
})
export class PublicacaoService {

  urlPublicao = 'http://localhost:3000/publicacao';

  constructor(private http: HttpClient) { }

  getPublicacao (): Observable<publicacao[]>{
    return this.http.get<publicacao[]>(this.urlPublicao);
  }

  cadastrarPublicacao(publicacao: publicacao): Observable<publicacao>{
    return this.http.post<publicacao>(this.urlPublicao, publicacao);
  }
}
