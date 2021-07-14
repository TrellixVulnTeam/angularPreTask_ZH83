import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInFormComponent } from './app/components/forms/log-in-form/log-in-form.component';

// import { UsersComponent } from './pages/users/users.component';
import { HomeComponent } from './app/pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'HomeComponent', pathMatch: 'prefix' },
  {
    path: '/womenWhoChanged',
    component: HomeComponent,
  },
  {
    path: 'forms/logIn',
    component: LogInFormComponent,
  },
  // {
  //   path: 'posts/:id',
  //   component: PostsComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
