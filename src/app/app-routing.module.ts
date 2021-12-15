import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './ABOUT/about/about.component';
import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './LOGIN/login/login.component';
import { SignUpComponent } from './SIGN-UP/sign-up/sign-up.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'about', component: AboutComponent},
  {path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
