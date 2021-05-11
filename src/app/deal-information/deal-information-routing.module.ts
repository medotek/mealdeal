import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealInformationPage } from './deal-information.page';

const routes: Routes = [
  {
    path: '',
    component: DealInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealInformationPageRoutingModule {}
