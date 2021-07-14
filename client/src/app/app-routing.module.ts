import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'prefix' },
  {
    path: 'home',
    component: HomeComponent,
  },
  // {
  //   path: 'actionList',
  //   component: ,
  // },
  // {
  //   path: 'actionForm',
  //   component: ,
  // },
  // {
  //   path: 'logIn',
  //   component: ,
  // },
  // {
  //   path: 'viewActions/:AccountID',
  //   component: ViewActionsComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
