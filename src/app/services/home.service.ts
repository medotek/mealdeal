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

  public test(marque) {
    return this.http.get(this.url + `brand/${marque}.json`);
  }
  public searchQuery(query) {
    //add page &page=1
    return this.http.get(this.url + `/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&json=1`);
  }

}
