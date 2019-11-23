import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private baseURL='http://localhost:8080/api/suppliers';

  constructor(private http: HttpClient) { }

  getSuppliersList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  getServiciosListByUserId(id:number): Observable<any>{
    return this.http.get(`${this.baseURL}/serviciosByUserId/${id}`);
  }

  getSupplierByUserId(id: number): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByUserId/${id}`);
  }

  findByUserId(id: number): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByUserId/${id}`);
  }
}
