import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private platform: Platform) { }

    addUser(user: User) {
      this.platform.ready().then(() => {
        this.http.post<User>('http://gudako.club:3001/api/user/create', user, this.httpOptions)
        .pipe(
          catchError(this.handleError<User>('Add Deal'))
        );
      })  
    }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
