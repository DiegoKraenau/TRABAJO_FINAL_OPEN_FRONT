import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseURL='http://localhost:8080/api/reservations';

  constructor(private http: HttpClient) { }

  createReservation(reserva: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, reserva);
  }

  findByUserId(id:number): Observable<any>{
    return this.http.get(`${this.baseURL}/reservationByUserId/${id}`);
  }
 
}
