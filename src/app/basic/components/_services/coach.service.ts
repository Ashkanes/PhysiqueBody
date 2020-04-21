import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coach } from '../_models/coach';


/* const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer' + localStorage.getItem('token')
  })
}; */

@Injectable({
  providedIn: 'root'
})
export class CoachService {
baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCoaches(): Observable<Coach[]>{
    return this.http.get<Coach[]>(this.baseUrl + "coach");
  }

  getUser(id):Observable<Coach>{
    return this.http.get<Coach>(this.baseUrl + "coach/" + id);
  }
}
