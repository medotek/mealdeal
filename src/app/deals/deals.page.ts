import { Component, OnInit } from '@angular/core';
import {HomeService} from '../services/home.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.page.html',
  styleUrls: ['./deals.page.scss'],
})
export class DealsPage implements OnInit {

  private result: any[] = [];

  constructor( private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.test().subscribe( res => {
      console.log(res['products']);
      this.result = res["products"];
    });
  }

}
