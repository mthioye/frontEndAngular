import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Personne } from './personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  private baseURL = "http://localhost:8080/api/v1/personnes";

  constructor(private httpClient: HttpClient) { }

  getPersonneList(): Observable<Personne[]>{
    return this.httpClient.get<Personne[]>(`${this.baseURL}`);
  }

  createPersonne(personne: Personne): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, personne);
  }

  getPersonneById(id: number): Observable<Personne>{
    return this.httpClient.get<Personne>(`${this.baseURL}/${id}`);
  }

  updatePersonne(id: number, personne: Personne): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, personne);
  }

  deletePersonne(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
