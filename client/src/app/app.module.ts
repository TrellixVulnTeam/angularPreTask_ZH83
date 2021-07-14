import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FilteredServersPipe } from './pipes/filter-users.pipe';
import { ActionsListComponent } from './pages/actions-list/actions-list.component';
import { SingleActCardComponent } from './pages/actions-list/single-act-card/single-act-card.component';
import { ViewActionsComponent } from './pages/view-actions/view-actions.component';
import { AddActionFormComponent } from './pages/add-action-form/add-action-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilteredServersPipe,
    ActionsListComponent,
    SingleActCardComponent,
    ViewActionsComponent,
    AddActionFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
