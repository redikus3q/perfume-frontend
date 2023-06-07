import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Flavor } from '../interfaces/flavor';
import backend_ip from './backend_ip';

@Injectable({
  providedIn: 'root',
})
export class FlavorsService {
  public url = backend_ip + 'api/parfume/';

  constructor(private http: HttpClient) {}

  public getAllFlavors(): Observable<Flavor[]> {
    return this.http.get<any>(this.url);
  }

  public getFlavorById(id: any): Observable<Flavor> {
    return this.http.get<Flavor>(`${this.url}${id}`);
  }
}
