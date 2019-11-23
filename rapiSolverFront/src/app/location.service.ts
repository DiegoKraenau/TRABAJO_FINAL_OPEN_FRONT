import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  private baseURL = 'http://localhost:8080/api/locations';

  constructor(private http: HttpClient) { }

  createLocation(location: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, location);
  }
}
