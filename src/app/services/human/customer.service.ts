import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private readonly prefix = `${environment.apiUrl}/api/customer`;

  constructor(private readonly apiService: ApiService) {}

  login = (body: any): Promise<Object> => {
    return new Promise((resolve, reject) => {
      const url = `${this.prefix}/login`;
      console.log('Login URL:', url);
      console.log('Login Body:', body);
      this.apiService.post(url, body).subscribe({
        next: (res) => resolve(res),
        error: (err) => reject(new Error(err?.message ?? 'Login error')),
      });
    });
  };
}
