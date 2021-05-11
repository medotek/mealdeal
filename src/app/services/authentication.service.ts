import { Platform } from '@ionic/angular';
import { Injectable, NgZone } from '@angular/core';
import { FirebaseUser, FirebaseX } from '@ionic-native/firebase-x/ngx';


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

  public getAuthentificationStatus() {
    return this.authenticationState;
  }

  getCurrentUser()  {
    return this.firebase.getCurrentUser()
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
          return error;
        })
    })
  }


  login(email, password): Promise<any> {
    return this.platform.ready().then(() => {
      return this.firebase.signInUserWithEmailAndPassword(email.value, password.value)
        .then(res => {
          this.authenticationState = 1;
          this.errorCode = null;
          this.errorMessage = null;
          return res;
        })
        .catch((error) => {
          this.errorCode = error.code;
          this.errorMessage = error.message;
          return error;
        })
    })
  }

  logout() {
    this.platform.ready().then(() =>
      this.firebase.signOutUser().then(r => {
        console.log(r);
        this.authenticationState = 0;
      })
    );
  }


  
}
