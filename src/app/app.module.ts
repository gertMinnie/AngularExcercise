import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    ProfileViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
