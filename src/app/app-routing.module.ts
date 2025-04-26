import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutsComponent } from 'src/app/layouts/layouts.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule),
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
