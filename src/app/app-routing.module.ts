import { TestComponent } from './components/test/test.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FoundComponent } from './components/found/found.component';
import { Login2Component } from './components/login2/login2.component';
const routes: Routes = [
  {
    path: '',//mac dinh la Login
    component: LoginComponent
  },

  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'found',
    component: FoundComponent
  },
  {
    path: 'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
