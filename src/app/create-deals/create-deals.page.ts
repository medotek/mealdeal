import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DealService } from '../entity/deal.service';

@Component({
  selector: 'app-create-deals',
  templateUrl: './create-deals.page.html',
  styleUrls: ['./create-deals.page.scss'],
})
export class CreateDealsPage implements OnInit {

  dealForm: FormGroup;
  private date: any;

  constructor(private router: Router, private fb: FormBuilder, private zone: NgZone, private dealService: DealService) {
    this.dealForm = this.fb.group({
      title: [''],
      description: [''],
      price: [''],
      oldPrice: [''],
      salePercent: [''],
      imageId: [''],
      dateCreation: [''],
      expired: false,
      storeId: '1',
      vote: 0,
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    this.date = new Date();
    this.dealForm.value.dateCreation = new Date(this.date.getTime() - this.date.getTimezoneOffset()*60000).toISOString();
    if (!this.dealForm.valid) {
      return false;
    } else {
      this.dealService.addDeal(this.dealForm.value)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log(res);
            this.dealForm.reset();
            this.router.navigate(['/home']);
          });
        });
    }
  }

}
