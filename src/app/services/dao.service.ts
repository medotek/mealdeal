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

  // createDeal(d: Deal) {
  //   this.dbList = this.database.list('/Deal');
  //   console.log(this.dbList);
  //   return this.dbList.push(d);
  // }
  //
  // getDeal(id: string) {
  //   this.dbObject = this.database.object('/Deal/' + id);
  //   return this.dbObject;
  // }
  //
  // getAllDeals() {
  //   this.dbList = this.database.list('/Deal');
  //   return this.dbList;
  // }
  //
  // updateDeal() {
  //   return null;
  // }
  //
  // deleteDeal(id: string) {
  //   this.dbObject = this.database.object('/Deal/' + id);
  //   this.dbObject.remove();
  // }
  //
  // getDealsOrderedByCreation(){
  //   this.dbList = this.database.list('/Deal', ref => ref.orderByChild('creation'));
  //   return this.dbList;
  // }
}
