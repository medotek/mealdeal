import { AuthenticationService } from './../services/authentication.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {HomeService} from '../services/home.service';
import {Deal} from '../interfaces/deal';
import {IonInfiniteScroll, Platform} from '@ionic/angular';
import {FirebaseX} from '@ionic-native/firebase-x/ngx';
import {DealService} from '../entity/deal.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.page.html',
  styleUrls: ['./deals.page.scss'],
})
export class DealsPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public imageTmp = '/assets/icon/favicon.png';
  public listHugo = ['1','2','3','4','5','6','7','8','9','10','11','12',
    '13','14','15','16','17','18','19','20','21','22'];
  public test = [''];
  public isUserLoggedIn;
  private result: any[] = [];

  constructor(private homeService: HomeService, private platform: Platform,
              private firebase: FirebaseX,private dealService: DealService, private router: Router,private auth: AuthenticationService) {
    this.platform.ready().then(() =>
      this.firebase.setLanguageCode('fr').then(r => console.log(r))
    );
  }

  ngOnInit() {
    for(let i = 0; i < 10; i++){
      this.test[i] = this.listHugo[i];
    };
    this.getAllDeals(null);
  }

  ionViewWillEnter(){
    this.isUserLoggedIn = this.auth.getAuthentificationStatus() === 1 ? true : false;
    console.log(this.isUserLoggedIn);
  }

  getAllDeals(event) {
    this.platform.ready().then(() => {
      this.dealService.getDealList().subscribe((res) => {
        this.result = res;

        if (event)
          event.target.complete();
      }, error => {
        console.log(error);

        if (event)
          event.target.complete();
      })
    });
  }


  loadData(event) {
    setTimeout(() => {
      const length = this.test.length;
      if(length < this.listHugo.length){
        for (let i = length; i < length + 10; i++){
          this.test[i] = this.listHugo[i];
        }
      }
      event.target.complete();
    }, 500);
  }
  addDeals(){
    this.router.navigate(['info-produit-to-deal']);
  }


}
