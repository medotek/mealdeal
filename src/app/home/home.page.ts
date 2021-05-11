import { AuthenticationService } from './../services/authentication.service';
import { DealService } from './../entity/deal.service';
import {Component} from '@angular/core';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';
import {HomeService} from '../services/home.service';
import {Welcome as API} from '../interfaces/welcome';
import {Product} from '../interfaces/product';
import {FirebaseX} from "@ionic-native/firebase-x/ngx";
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  encodedData: any;
  scannedBarCode: string;
  barcodeScannerOptions: BarcodeScannerOptions;
  public response: API;
  public monProduit: Product;

  //state
  public oui = false;
  public isUserLoggedIn: boolean = false;

  Deals: any = [];

  constructor(private platform: Platform,
              private scanner: BarcodeScanner,
              private homeService: HomeService,
              private firebase: FirebaseX,
              private dealService: DealService,
              private auth: AuthenticationService) {

    this.encodedData = 'Programming isn\'t about what you know';

    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };

    platform.ready().then(() => {
      this.firebase.setLanguageCode('fr').then(r => console.log(r))
    }).then();

    this.homeService.searchProduct('5410041040807').subscribe((data: API) => {
      this.response = data;
      // récupère uniquement le tableau product
      console.log(this.response.product);

    })
  }

  ngOnInit() {
    this.isUserLogged();
  }

  ionViewWillEnter(){
    this.isUserLogged();
  }


  getAllDeals() {
    this.platform.ready().then(() => {
      this.dealService.getDealList().subscribe((res) => {
        console.log(res);
        this.Deals = res;
      });
    });
  }

  isUserLogged() {
    this.platform.ready().then(() => {
      this.firebase.isUserSignedIn().then(r => {
        if (r) {
          this.isUserLoggedIn = true;
        } else {
          this.isUserLoggedIn = false;
        }
      })
    })
  }

  logout() {
    this.auth.logout();
    this.isUserLogged();
  }


  scanBRcode() {
    this.scanner.scan().then(res => {
      this.scannedBarCode = res.text;

      this.homeService.searchProduct(this.scannedBarCode).subscribe((data: API) => {
        this.response = data;
        this.monProduit = this.response.product;
        this.oui = true;
      });
      this.homeService.searchProduct(this.scannedBarCode).subscribe(res => {
        console.log(res);
      });
    });
  }

  generateBarCode() {
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodedData).then(
      res => {
        alert(res);
        this.encodedData = res;
      }, error => {
        alert(error);
      }
    );
  }
}
