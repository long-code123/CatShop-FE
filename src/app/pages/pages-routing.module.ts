import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cat-list', pathMatch: 'full' },
  {
    path: 'cat-list',
    loadChildren: () => import('./cat-list/cat-list.module').then((m) => m.CatListModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
