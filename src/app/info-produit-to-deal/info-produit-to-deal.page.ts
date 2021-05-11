import { Component, OnInit } from '@angular/core';
import {Welcome as API} from '../interfaces/welcome';
import {Product} from '../interfaces/product';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {HomeService} from '../services/home.service';

@Component({
  selector: 'app-info-produit-to-deal',
  templateUrl: './info-produit-to-deal.page.html',
  styleUrls: ['./info-produit-to-deal.page.scss'],
})
export class InfoProduitToDealPage implements OnInit {

  scannedBarCode: string;
  public response: API;
  public monProduit: Product;
  public monFiltre: string;
  public searchResults: any[] = [];
  public search = false;
  public scanne = false;

  constructor(private scanner: BarcodeScanner,private homeService: HomeService,) { }

  ngOnInit() {
  }

  scanBRcode() {
    this.scanner.scan().then(res => {
      this.scannedBarCode = res.text;
      this.search = false;
      this.scanne = true;
      this.homeService.searchProduct(this.scannedBarCode).subscribe((data: API) => {
        this.response = data;
        this.monProduit = this.response.product;
      });
    });
    // this.search = false;
    // this.scanne = true;
    // this.scannedBarCode = '5410041040807';
    // this.homeService.searchProduct(this.scannedBarCode).subscribe((data: API) => {
    //   this.response = data;
    //   this.monProduit = this.response.product;
    // });
  }
  updateFilter(){
    this.scanne = false;
    this.search = true;
    this.homeService.test(this.monFiltre).subscribe((data: API) => {
      this.searchResults = data['products'];
    });
  }

}
