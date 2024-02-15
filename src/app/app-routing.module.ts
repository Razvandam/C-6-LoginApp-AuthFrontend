// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/canActivate/auth.guard';
import { UnsavedChangesGuard } from './guards/canDeactivate/unsaved-changes.guard';
import { unsavedChangesNewGuard } from './guards/canDeactivate/unsaved-changes-new.guard';

const routes: Routes = [
  {
    path: 'login',
    canDeactivate: [unsavedChangesNewGuard], 
    // canDeactivate: [UnsavedChangesGuard],
    component: LoginComponent,
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // app-routing.module.ts
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
