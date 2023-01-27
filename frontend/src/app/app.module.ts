import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookPageComponent } from './pages/book/book.page';
import { DashboardPageComponent } from './pages/dashboard/dashboard.page';
import { ErrorPageComponent } from './pages/error/error.page';
import { ProfilePageComponent } from './pages/profile/profile.page';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    BookPageComponent,
    DashboardPageComponent,
    ErrorPageComponent,
    ProfilePageComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
