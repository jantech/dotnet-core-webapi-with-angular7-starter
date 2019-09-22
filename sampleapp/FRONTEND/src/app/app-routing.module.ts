import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DemoComponent } from './demo/demo.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'user/:id', component: UserProfileComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'demo', component: DemoComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path  : '**', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
