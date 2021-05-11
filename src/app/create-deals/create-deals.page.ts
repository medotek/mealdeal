import { Component, OnInit, NgZone } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DealService } from '../entity/deal.service';
import {Product} from '../interfaces/product';
import {FirebaseUser, FirebaseX} from '@ionic-native/firebase-x/ngx';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-create-deals',
  templateUrl: './create-deals.page.html',
  styleUrls: ['./create-deals.page.scss'],
})
export class CreateDealsPage implements OnInit {

  produitId;
  produitImage;
  haveProductImg = false;
  reduction = 0.0;
  prixInitiale = 0.0;
  prix = 0.0;
  dealForm: FormGroup;
  private date: any;

  constructor(private router: Router, private fb: FormBuilder, private zone: NgZone,
              private dealService: DealService,private route: ActivatedRoute,
              private firebase: FirebaseX, public toastController: ToastController) {
    this.route.params.subscribe(params => {
      this.produitId = params.produitId;
      if(params.produitImage){
        this.produitImage = params.produitImage;
      }
    });
  }

  ngOnInit() {
    let uid: string;
    this.dealForm = this.fb.group({
      title: [''],
      description: [''],
      price: [''],
      oldPrice: [''],
      salePercent: [''],
      imageId: this.produitImage,
      dateCreation: [''],
      author: uid,
      expired: false,
      storeId: '1',
      vote: 0,
    });
    this.getCurrentUserPromise().then((data: FirebaseUser) => {
        uid = data.uid;
      this.dealForm.value.uid = uid;
      }
    );
  }

  onFormSubmit() {
    this.date = new Date();
    this.dealForm.value.dateCreation = new Date(this.date.getTime() - this.date.getTimezoneOffset()*60000).toISOString();
    if (!this.dealForm.valid) {
      this.alerteToast();
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

  calcReductionPrix(operation) {
    if (operation === 'Pourcentage') {
      const prixSoustrait = (this.prixInitiale * this.reduction)/100;
      this.prix = this.prixInitiale - prixSoustrait;
    } else if (operation === 'prixFinal') {
      this.reduction = (((this.prix - this.prixInitiale)/(-1))*100)/this.prixInitiale;
    }
  }
  cancelDeal(){
    if (confirm('Voulez-vous annuler le deal?'))
      this.router.navigate(['/deals']);
  }
  getCurrentUserPromise() {
    return this.firebase.getCurrentUser();
  }

  async alerteToast() {
    const toast = await this.toastController.create({
      header: 'Certaines données sont vides.',
      message: 'Assurez-vous de saisir tous les champs !',
      position: 'top',
      buttons: [
        {
          side: 'end',
          icon: 'close-circle-outline',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();
  }
}
