import { Deal } from './../interfaces/deal';
import { Injectable } from '@angular/core';
// import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  // //Realtime Database
  // dbList: AngularFireList<any>;
  // dbObject: AngularFireObject<any>;

  constructor(
    // private database: AngularFireDatabase
  ) { }


  //////////////////
  //    DEALS     //
  /////////////////////////////////////////////////////////////////////////////////////////////

  /*
  createDeal(d: Deal) {
    this.dbList = this.database.list('/Deal');
    console.log(this.dbList);
    return this.dbList.push(d);
  }

  getDeal(key: string) {
    this.dbObject = this.database.object('/Deal/' + key);
    return this.dbObject;
  }

  getAllDeals() {
    this.dbList = this.database.list('/Deal');
    return this.dbList;
  }

  getDealsBySku(sku: string){
    this.dbList = this.database.list('/Deal', ref => ref.orderByChild('product_sku').equalTo(sku));
    return this.dbList;
  }

  getDealsOrderedByCreation(){
    this.dbList = this.database.list('/Deal', ref => ref.orderByChild('creation'));
    return this.dbList;
  }

  updateDeal(key: string, deal: Deal) {
    this.dbObject = this.database.object('/Deal/' + key);
    return this.dbObject.update(deal);
  }

  deleteDeal(key: string) {
    this.dbObject = this.database.object('/Deal/' + key);
    this.dbObject.remove();
  }
  */
}
