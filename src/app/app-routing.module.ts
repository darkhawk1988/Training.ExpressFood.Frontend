import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './+components/login/login.component';
import RegisterComponent from './+components/register/register.component';
import { adminLoginComponent } from './+components/adminLogin/adminLogin.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin',component:adminLoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  { path: 'admins', loadChildren: () => import('../admins/admins.module').then(m => m.AdminsModule) },
  { path: 'restaurants', loadChildren: () => import('../restaurants/restaurants.module').then(m => m.RestaurantsModule) },
  { path: 'customers', loadChildren: () => import('../customers/customers.module').then(m => m.CustomersModule) },
  {path:'**',redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
