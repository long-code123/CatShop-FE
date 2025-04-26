import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatListComponent } from './cat-list/cat-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'cat-list', pathMatch: 'full' },
  { path: 'cat-list', component: CatListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
