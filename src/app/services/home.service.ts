import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url = 'https://world.openfoodfacts.org/';

  constructor(private http: HttpClient) { }

  public getFood() {
    return this.http.get(this.url + `country/france.json`);
  }

  public searchProduct(id) {
    return this.http.get(this.url + `api/v0/product/${id}.json`);
  }

  public test() {
    return this.http.get(this.url + `brand/cristaline.json`);
  }
}
