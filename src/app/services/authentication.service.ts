import { Platform } from '@ionic/angular';
import { Injectable, NgZone } from '@angular/core';
import { FirebaseUser, FirebaseX } from '@ionic-native/firebase-x/ngx';
import {User} from "../entity/user";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public errorCode: string;
  public errorMessage: string;

  public authenticationState: number = 0;
   // 0: not logged in (default)
   // 1: logged in

  constructor(
    private firebase: FirebaseX,
    private platform: Platform
  ) {}

  public getErrorCode() {
    return this.errorCode;
  }

  public getErrorMessage() {
    return this.errorMessage;
  }

  // Success: return true
  // Error: return false 
  public createAccount(email: string, password: string) {
    this.platform.ready().then(r => {
      this.firebase.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
          this.authenticationState = 1;
          this.errorCode = null;
          this.errorMessage = null;
      })
      .catch((error) => {
          this.errorCode = error.code;
          this.errorMessage = error.message;
      })
    })
  }

  
  logout() {
    this.platform.ready().then(() =>
      this.firebase.signOutUser().then(r => {
        console.log(r);
      })
    );
  }


  getCurrentUser()  {
    let fbu: FirebaseUser;
    return this.firebase.getCurrentUser().then((data: FirebaseUser) => {
        fbu = data;
        return fbu;
      }).catch((error) => {
        return error;
      })
    }
}
