import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { AddNewComponent } from './news/add-new/add-new.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'precautions', component: PrecautionsComponent },
  {
    path: 'addNews',
    component: AddNewComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: AdminComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '*', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
