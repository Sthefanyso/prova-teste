import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anuncio } from './anuncio';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  url = "http://localhost:3000/anuncios"

  constructor(private http: HttpClient) { }

  getAnuncios(): Observable<Anuncio[]>{
    return this.http.get<Anuncio[]>(this.url);
  }

  save( anuncio: Anuncio): Observable<Anuncio>{
    return this.http.post<Anuncio>(this.url, anuncio);
  }


}
