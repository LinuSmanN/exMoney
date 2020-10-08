import { NgModule } from '@angular/core';

import { ExchangeRoutingModule } from './exchange-routing.module';
import { ExchangeComponent } from './pages/exchange/exchange.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ExchangeComponent],
  imports: [
    SharedModule,
    ExchangeRoutingModule
  ]
})
export class ExchangeModule { }
