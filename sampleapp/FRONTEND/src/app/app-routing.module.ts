import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'demo', component: DemoComponent
  },
  {
    path: '', component: RegisterComponent
  },
  {
    path  : '**', component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
