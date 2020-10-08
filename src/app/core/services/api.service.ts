import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const api = 'https://api.exchangeratesapi.io/latest';

@Injectable({ providedIn: 'root' })

export class ApiService {
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  protected get<T>(url) {
    return this.http.get<T>(api + url, {
      headers: {
        Accept: 'application/json',
      },
    });
  }
}
