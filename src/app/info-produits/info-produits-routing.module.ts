import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoProduitsPage } from './info-produits.page';

const routes: Routes = [
  {
    path: '',
    component: InfoProduitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoProduitsPageRoutingModule {}
