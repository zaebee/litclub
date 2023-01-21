import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookPageComponent } from './pages/book/book.page';
import { DashboardPageComponent } from './pages/dashboard/dashboard.page';
import { ErrorPageComponent } from './pages/error/error.page';
import { ProfilePageComponent } from './pages/profile/profile.page';

const routes: Routes = [
  {path: 'book/:id', component: BookPageComponent},
  {path: 'error/:code', component: ErrorPageComponent},
  {path: 'dashboard', component: DashboardPageComponent},
  {path: 'profile/:id', component: ProfilePageComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
