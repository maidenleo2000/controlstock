import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFound404Component } from './pages/not-found404/not-found404.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { StockModule } from '../stock/stock.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuComponent,
    SearchBoxComponent,
    AdminComponent,
    LoginPageComponent,
    NotFound404Component,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    StockModule,
    RouterModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
