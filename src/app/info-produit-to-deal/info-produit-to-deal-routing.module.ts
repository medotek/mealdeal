import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoProduitToDealPage } from './info-produit-to-deal.page';

const routes: Routes = [
  {
    path: '',
    component: InfoProduitToDealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoProduitToDealPageRoutingModule {}
