import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })

export class ExchangeService extends ApiService {

  getConvert(from, to): any {
    return this.get<any>(`?base=${from}&symbols=${to}`);
  }
}
