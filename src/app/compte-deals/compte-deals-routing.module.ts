import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompteDealsPage } from './compte-deals.page';

const routes: Routes = [
  {
    path: '',
    component: CompteDealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompteDealsPageRoutingModule {}
