import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  private baseURL='http://localhost:8080/api/recommendations';

  constructor(private http: HttpClient) { }

  getRecommendationsByUserId(id:number): Observable<any>{
    return this.http.get(`${this.baseURL}/recommendationsByUserId/${id}`);
  }

  crearRecomendacion(recommendation: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, recommendation);
  }
}
