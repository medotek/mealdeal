import {Component, OnInit, ViewChild} from '@angular/core';
import {Welcome as API} from '../interfaces/welcome';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {HomeService} from '../services/home.service';
import {Product} from '../interfaces/product';
import {DealService} from "../entity/deal.service";
import {Deal} from "../entity/deal";
import {IonInfiniteScroll} from "@ionic/angular";

@Component({
  selector: 'app-info-produits',
  templateUrl: './info-produits.page.html',
  styleUrls: ['./info-produits.page.scss'],
})
export class InfoProduitsPage implements OnInit {

  scannedBarCode: string;
  public response: API;
  public monProduit: Product;
  public monFiltre: string;
  public Deal: Deal[];
  public query: string;
  public searchResults: any[] = [];
  private result: any[] = [];
  public search = false;
  public scanne = false;
  public isUserLoggedIn = false;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public imageTmp = '/assets/icon/favicon.png';
  public listHugo = ['1','2','3','4','5','6','7','8','9','10','11','12',
    '13','14','15','16','17','18','19','20','21','22'];
  public test = [''];

  constructor(private scanner: BarcodeScanner, private homeService: HomeService,
              private dealService: DealService
  ) {
  }

  ngOnInit() {
  }

  searchDeal() {
    this.search= true;
     this.dealService.searchDeal(this.query).subscribe((res) => {
       console.log(res);
       this.Deal = res;
     });
  }


  // loadData(event) {
  //   setTimeout(() => {
  //     const length = this.test.length;
  //     if(length < this.listHugo.length){
  //       for (let i = length; i < length + 10; i++){
  //         this.test[i] = this.listHugo[i];
  //       }
  //     }
  //     event.target.complete();
  //   }, 500);
  // }
}
