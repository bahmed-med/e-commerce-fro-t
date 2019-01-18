import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './modules/header/header/header.component';
import { AuthentificationComponent } from './modules/authentification/authentification.component';

const routes: Routes = [

  {
    path: '',
    component: HeaderComponent
  },
  {
    path: 'login',
    component: AuthentificationComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
