import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { LoggedInGuard } from './app-logged-in.guard';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./components/pages/admin-page/admin-page.module').then(
        (m) => m.AdminPageModule
      ),
  },
  { path: '**', component: LoginPageComponent, canActivate: [LoggedInGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
