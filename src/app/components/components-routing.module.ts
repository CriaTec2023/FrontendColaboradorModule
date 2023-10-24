import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const AuthRoutes:Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path : 'home', loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule)},

/*   {path: 'chat', component: ChatComponent},
  {path: 'user', component : UserComponent, canActivate: [authGuard, hasRole], data: {role: Role.USER}},
  {path: 'admin', component : AdminComponent, canActivate: [authGuard, hasRole], data: {role: Role.ADMIN}}, */
  
  
];

@NgModule({
  imports: [RouterModule.forChild(AuthRoutes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
