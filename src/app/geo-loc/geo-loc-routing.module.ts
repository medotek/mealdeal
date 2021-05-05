import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeoLocPage } from './geo-loc.page';

const routes: Routes = [
  {
    path: '',
    component: GeoLocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeoLocPageRoutingModule {}
