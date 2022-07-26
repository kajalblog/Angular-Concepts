import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { AngularFireAuthGuard, canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin=()=>redirectUnauthorizedTo(['login']);
const isLogIn=()=>redirectLoggedInTo('/dashboard');

const routes:Routes=[
  { path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent,...canActivate(isLogIn)},
  {path:'dashboard',component:DashboardComponent,
    canActivate:[AngularFireAuthGuard],
    data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'register',component:RegisterComponent,...canActivate(isLogIn)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
