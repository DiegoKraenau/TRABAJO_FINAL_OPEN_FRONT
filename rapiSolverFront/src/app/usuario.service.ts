import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseURL='http://localhost:8080/api/roles';

  constructor(private http: HttpClient) { }

  getCategoriesList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
    
  }
}
