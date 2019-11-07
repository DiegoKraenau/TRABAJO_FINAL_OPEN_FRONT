import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private baseURL='http://localhost:8080/api/detalles';

  constructor(private http: HttpClient) { }

  getDetallesList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
    
  }

  getDetalleById(id: number): Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

  createCliente(detalle: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, detalle);
  }
}
