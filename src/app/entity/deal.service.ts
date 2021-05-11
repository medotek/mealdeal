import { Injectable } from '@angular/core';
import { Deal } from './deal';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DealService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addDeal(deal: Deal): Observable<any> {
    return this.http.post<Deal>('http://gudako.club:3001/api/create-deal', deal, this.httpOptions)
      .pipe(
        catchError(this.handleError<Deal>('Add Deal'))
      );
  }

  getDeal(id): Observable<Deal[]> {
    return this.http.get<Deal[]>('http://gudako.club:3001/api/get-deal/' + id)
      .pipe(
        tap(_ => console.log(`Deal fetched: ${id}`)),
        catchError(this.handleError<Deal[]>(`Get Deal id=${id}`))
      );
  }

  getDealList(): Observable<Deal[]> {
    return this.http.get<Deal[]>('http://gudako.club:3001/api')
      .pipe(
        tap(deals => console.log('Deals fetched!')),
        catchError(this.handleError<Deal[]>('Get Deals', []))
      );
  }

  updateDeal(id, deal: Deal): Observable<any> {
    return this.http.put('http://gudako.club:3001/api/update-deal/' + id, deal, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Deal updated: ${id}`)),
        catchError(this.handleError<Deal[]>('Update Deal'))
      );
  }

  deleteDeal(id): Observable<Deal[]> {
    return this.http.delete<Deal[]>('http://gudako.club:3001/api/delete-deal/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Deal deleted: ${id}`)),
        catchError(this.handleError<Deal[]>('Delete Deal'))
      );
  }

  searchDeal(query): Observable<Deal[]> {
    return this.http.get<Deal[]>('http://gudako.club:3001/api/search-deal/' + query, this.httpOptions)
      .pipe(
        tap(deals => console.log('Deals fetched!')),
        catchError(this.handleError<Deal[]>('Get Deals', []))
      );
  }

  getDealbyAuthor(id): Observable<Deal[]> {
    return this.http.get<Deal[]>('http://gudako.club:3001/api/get-user-deals/' + id)
      .pipe(
        tap(_ => console.log(`Deal fetched: ${id}`)),
        catchError(this.handleError<Deal[]>(`Get Deal id=${id}`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
