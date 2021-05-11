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
    redirectTo: 'home',
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
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'create-deals',
    loadChildren: () => import('./create-deals/create-deals.module').then( m => m.CreateDealsPageModule)
  },
  {
    path: 'info-produit-to-deal',
    loadChildren: () => import('./info-produit-to-deal/info-produit-to-deal.module').then( m => m.InfoProduitToDealPageModule)
  },
  {
    path: 'deal-information',
    loadChildren: () => import('./deal-information/deal-information.module').then( m => m.DealInformationPageModule)
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
