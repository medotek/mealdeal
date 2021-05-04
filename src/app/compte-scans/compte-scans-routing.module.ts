import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompteScansPage } from './compte-scans.page';

const routes: Routes = [
  {
    path: '',
    component: CompteScansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompteScansPageRoutingModule {}
