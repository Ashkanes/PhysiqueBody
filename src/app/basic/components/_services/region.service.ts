import { City } from './../_models/city';
import {map} from "rxjs/operators";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Region } from '../_models/region';

@Injectable({
    providedIn: 'root'
  })
  export class RegionService {
  baseUrl="https://localhost:44391/api/Region/";

  constructor(private http: HttpClient)
  {}

  getRegion():Observable<Region[]>
  {
      return this.http.get<Region[]>(this.baseUrl)
      
  }
  getCity(id:number):Observable<City[]>{
      return this.http.get<City[]>(this.baseUrl + id);
  }
  }