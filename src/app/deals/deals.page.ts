import { Component, OnInit } from '@angular/core';
import {HomeService} from '../services/home.service';
import {DaoService} from '../services/dao.service';
import {Deal} from '../interfaces/deal';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.page.html',
  styleUrls: ['./deals.page.scss'],
})
export class DealsPage implements OnInit {

  private result: Deal[] = [];

  constructor(private homeService: HomeService, private dao: DaoService) { }

  ngOnInit() {
    // this.dao.getAllDeals().snapshotChanges().subscribe(res => {
    //   res.forEach(item => {
    //      const deal: Deal = item.payload.toJSON();
    //      this.result.push(deal as Deal);
    //      deal.image_id = 'https://images-ext-1.discordapp.net/external/N5YZ9atJOalIOuQPL18Hp307pnwok-beSaOT3mCf0qY/%3Falt%3Dme'+
    //        'dia%26token%3Da83410ca-705d-4a79-beb4-511399b473b7/https/firebasestorage.googleapis.com/v0/b/mealdeal-lpsmin.appspot.'+
    //        'com/o/images%252Fproducts%252F.placeholder%252Fplaceholder_664px.png';
    //   });
    // });
  }

}
