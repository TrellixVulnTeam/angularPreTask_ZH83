import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { UsersComponent } from './pages/users/users.component';
import { HomeComponent } from './app/pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'HomeComponent', pathMatch: 'prefix' },
  // {
  //   path: 'account/actions',
  //   component: HomeComponent,
  // },
  // {
  //   path: 'account/action',
  //   component: ,
  // },
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
