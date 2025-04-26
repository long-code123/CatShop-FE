import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Token } from 'src/app/helpers/enums/token.enum';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem(Token.ACCESS_TOKEN)}`,
    }),
  };

  constructor(private readonly httpClient: HttpClient) {}

  get(url: string, params?: any): Observable<any> {
    return this.httpClient.get(url, { ...this.httpOptions, params });
  }

  post(url: string, body: any): Observable<any> {
    return this.httpClient.post(url, body, this.httpOptions);
  }

  put(url: string, body: any): Observable<any> {
    return this.httpClient.put(url, body, this.httpOptions);
  }

  delete(url: string): Observable<any> {
    return this.httpClient.delete(url, this.httpOptions);
  }
}
