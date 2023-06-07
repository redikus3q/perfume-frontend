import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import backend_ip from './backend_ip';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public url = backend_ip + 'authentication';

  constructor(private http: HttpClient) {}

  public login(body: any): Observable<any> {
    return this.http.post<any>(this.url + '/login/', body, {
      headers: { skip: 'true' },
    });
  }

  public register(body: any): Observable<any> {
    return this.http.post<any>(this.url + '/register/', body, {
      headers: { skip: 'true' },
    });
  }

  public getUser(): Observable<any> {
    return this.http.get<any>(this.url + '/getUser/', {
      headers: { skip: 'getUser' },
    });
  }
}
