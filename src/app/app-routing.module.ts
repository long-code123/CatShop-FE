import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutsComponent } from 'src/app/layouts/layouts.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { CatListComponent } from './pages/cat-list/cat-list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      // Tạo các route con
      { path: '', redirectTo: '/cat-list', pathMatch: 'full' }, // Chuyển hướng đến page cats mặc định
      { path: 'cat-list', component: CatListComponent }, // Route cho danh sách mèo
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
