import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CatListComponent } from './cat-list.component';
import { CatListRoutingModule } from './cat-list.routing';

@NgModule({
  declarations: [CatListComponent],
  imports: [CommonModule, CatListRoutingModule],
})
export class CatListModule {}
