import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HomeService} from '../services/home.service';

@Component({
  selector: 'app-deal-information',
  templateUrl: './deal-information.page.html',
  styleUrls: ['./deal-information.page.scss'],
})
export class DealInformationPage implements OnInit {

  page;
  produit;

  constructor(private route: ActivatedRoute, private homeService: HomeService) {
    this.route.params.subscribe( params => {
      this.homeService.searchProduct(params.id).subscribe(res => {
        console.log(res);
        this.produit = res['product'];
      }, () => {console.log('not found');});
      this.page = params.page;
    });
  }

  ngOnInit() {
  }

}
