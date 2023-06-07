import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import backend_ip from './backend_ip';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  public url = backend_ip + 'api/comments/';

  constructor(private http: HttpClient) {}

  public postComment(body: any): Observable<Comment> {
    return this.http.post<any>(this.url, body);
  }

  public getComments(id: number): Observable<Comment[]> {
    return this.http.get<any>(`${this.url}parfume/${id}`);
  }

  public deleteComment(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}${id}`);
  }
}
