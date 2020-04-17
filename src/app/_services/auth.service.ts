import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl="https://localhost:44391/api/auth/";

  constructor(private http: HttpClient) { }

  login(model:any):Observable<any>
  {
   return this.http.post(this.baseUrl + "login", model)
    .pipe(
      map((respose:any) => {
        const user = respose;
        if(user)
        localStorage.setItem("token", user.token);
      })
    );
  }

  register(model:any){
    return this.http.post(this.baseUrl + "register", model);
  }
}
