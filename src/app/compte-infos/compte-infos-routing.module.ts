import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompteInfosPage } from './compte-infos.page';

const routes: Routes = [
  {
    path: '',
    component: CompteInfosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompteInfosPageRoutingModule {}
