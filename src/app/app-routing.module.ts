import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './shared/pages/login-page/login-page.component';
import { RegisterPageComponent } from './shared/pages/register-page/register-page.component';
import { NotFound404Component } from './shared/pages/not-found404/not-found404.component';
import { AdminComponent } from './shared/pages/admin/admin.component';

const routes: Routes = [

  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'login-page',
    component: LoginPageComponent
  },
  {
    path: 'register-page',
    component: RegisterPageComponent
  },
  {
    path: 'not-found404',
    component: NotFound404Component
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./stock/stock.module').then(m => m.StockModule)
  },
  {
    path:'**',
    redirectTo:'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
