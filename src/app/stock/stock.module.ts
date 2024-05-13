import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockRoutingModule } from './stock-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StockComponent } from './pages/stock/stock.component';



@NgModule({
  declarations: [
    DashboardComponent,
    StockComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
  ],
  exports: [
    DashboardComponent,
    StockComponent
    ]
})
export class StockModule { }
