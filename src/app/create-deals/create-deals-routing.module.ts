import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateDealsPage } from './create-deals.page';

const routes: Routes = [
  {
    path: '',
    component: CreateDealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateDealsPageRoutingModule {}
