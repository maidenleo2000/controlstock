import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { StockComponent } from "./pages/stock/stock.component";


const routes: Routes = [

  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'stock',
    component: StockComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class StockRoutingModule {}
