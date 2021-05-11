import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HomeService} from '../services/home.service';
import {DealService} from '../entity/deal.service';

@Component({
  selector: 'app-deal-information',
  templateUrl: './deal-information.page.html',
  styleUrls: ['./deal-information.page.scss'],
})
export class DealInformationPage implements OnInit {

  page;
  produit;
  productDeal;

  constructor(private route: ActivatedRoute, private homeService: HomeService, private dealService: DealService) {
    this.route.params.subscribe( params => {
      console.log("success deal info")
      if (params.id) {
        this.homeService.searchProduct(params.id).subscribe(res => {
          console.log(res['product']);
          this.produit = res['product'];
        }, () => {console.log('not found');});
      }

      if (params.idDeal) {
        this.dealService.getDeal(params.idDeal).subscribe(r => {
          console.log(r);
          this.productDeal = r;
        });
      }
      this.page = params.page;
    });
  }

  ngOnInit() {
  }

}
