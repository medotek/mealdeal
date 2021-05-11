import {Component, OnInit, ViewChild} from '@angular/core';
import {HomeService} from '../services/home.service';
import {Deal} from '../interfaces/deal';
import {IonInfiniteScroll, Platform} from '@ionic/angular';
import {FirebaseX} from '@ionic-native/firebase-x/ngx';
import {DealService} from '../entity/deal.service';

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
  private result: any[] = [];

  constructor(private homeService: HomeService, private platform: Platform,
              private firebase: FirebaseX,private dealService: DealService) {
    this.platform.ready().then(() =>
      this.firebase.setLanguageCode('fr').then(r => console.log(r))
    );
  }

  ngOnInit() {
    for(let i = 0; i < 10; i++){
      this.test[i] = this.listHugo[i];
    };
    this.getAllDeals();
  }
  getAllDeals() {
    this.platform.ready().then(() => {
      this.dealService.getDealList().subscribe((res) => {
        console.log(res);
        this.result = res;
      });
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

}
