import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'deals',
    loadChildren: () => import('./deals/deals.module').then( m => m.DealsPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'info-produits',
    loadChildren: () => import('./info-produits/info-produits.module').then( m => m.InfoProduitsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'compte-infos',
    loadChildren: () => import('./compte-infos/compte-infos.module').then( m => m.CompteInfosPageModule)
  },
  {
    path: 'compte-scans',
    loadChildren: () => import('./compte-scans/compte-scans.module').then( m => m.CompteScansPageModule)
  },
  {
    path: 'compte-deals',
    loadChildren: () => import('./compte-deals/compte-deals.module').then( m => m.CompteDealsPageModule)
  },
  {
    path: 'produits-alternatifs',
    loadChildren: () => import('./produits-alternatifs/produits-alternatifs.module').then( m => m.ProduitsAlternatifsPageModule)
  },

  /*{
    path: 'geo-loc',
    loadChildren: () => import('./geo-loc/geo-loc.module').then( m => m.GeoLocPageModule)
  },*/

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
