import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'exchange' },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'exchange', loadChildren: () => import('./features/exchange/exchange.module').then(e => e.ExchangeModule)}
    ]
  },
  { path: '**', redirectTo: 'exchange' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
