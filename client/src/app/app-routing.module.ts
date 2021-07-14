import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsListComponent } from './pages/actions-list/actions-list.component';
import { AddActionFormComponent } from './pages/add-action-form/add-action-form.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewActionsComponent } from './pages/view-actions/view-actions.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'prefix' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'actionList',
    component: ActionsListComponent,
  },
  {
    path: 'actionForm',
    component: AddActionFormComponent,
  },
  {
    path: 'logIn',
    component: ViewActionsComponent,
  },
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
