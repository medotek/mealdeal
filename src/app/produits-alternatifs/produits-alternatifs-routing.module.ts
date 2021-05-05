import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitsAlternatifsPage } from './produits-alternatifs.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitsAlternatifsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduitsAlternatifsPageRoutingModule {}
