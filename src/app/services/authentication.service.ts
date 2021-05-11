import { Injectable, NgZone } from '@angular/core';
import { Users} from '../Interfaces/users';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userData: any;
  public loggedIn = false;

  constructor(
    public router: Router,
    public ngZone: NgZone,
  ) {
  }

  logUserIn(email, pass) {
    console.log(email + ' ' + pass);
  }

}
