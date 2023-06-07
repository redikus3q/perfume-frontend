import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import backend_ip from './backend_ip';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  public url = backend_ip + 'payment/create-checkout-session/';

  constructor(private http: HttpClient) {}

  public checkout(body: any): Observable<null> {
    return this.http.post<any>(this.url, body);
  }
}
