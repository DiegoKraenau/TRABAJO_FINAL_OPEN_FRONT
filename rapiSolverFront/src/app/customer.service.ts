import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseURL = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) { }

  createCustomer(customer: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, customer);
  }

  deleteCustomer(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`, {responseType: 'text'})
  }

  getCustomerList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  findByUserId(id:number): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByUserId/${id}`);
  }
}
