import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ExchangeService } from 'src/app/core/services/exchange.services';
import { Currency } from 'src/app/core/models/currency';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  summ: number;
  rate: number;
  result: number;
  currencies: Currency[];
  fromCode: any;
  toCode: any;

  constructor(
    private exchangeService: ExchangeService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.currencies = [
      { code: 'AUD'},
      { code: 'BGN'},
      { code: 'BRL'},
      { code: 'CAD'},
      { code: 'CHF'},
      { code: 'CNY'},
      { code: 'CZK'},
      { code: 'DKK'},
      { code: 'EUR'},
      { code: 'GBP'},
      { code: 'HKD'},
      { code: 'HRK'},
      { code: 'HUF'},
      { code: 'IDR'},
      { code: 'ILS'},
      { code: 'INR'},
      { code: 'ISK'},
      { code: 'JPY'},
      { code: 'KRW'},
      { code: 'MXN'},
      { code: 'MYR'},
      { code: 'NOK'},
      { code: 'NZD'},
      { code: 'PHP'},
      { code: 'PLN'},
      { code: 'RON'},
      { code: 'RUB'},
      { code: 'SEK'},
      { code: 'SGD'},
      { code: 'THB'},
      { code: 'TRY'},
      { code: 'USD'},
      { code: 'ZAR'},
    ];
  }

  conVert(): void {
    if (this.rate){
      this.result = this.summ * this.rate;
    }
  }

  getRate(): void {
    if (this.fromCode && this.toCode) {
      this.exchangeService.getConvert(this.fromCode, this.toCode).subscribe(res => {
        this.rate = res.rates[this.toCode];
        if (this.summ) {
          this.conVert();
          this.cd.detectChanges();
        }
      });
    }
  }

  onChangeSum(event, position): void {
    if (position === 'from') {
      this.fromCode = event;
    } else if (position === 'to') {
      this.toCode = event;
    }
    this.getRate();
  }
}
