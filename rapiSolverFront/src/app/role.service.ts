import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseURL='http://localhost:8080/api/roles';

  constructor(private http: HttpClient) { }

  getRoleById(id: number): Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }
}
