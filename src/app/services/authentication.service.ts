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
    /*this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('users', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('users', null);
        JSON.parse(localStorage.getItem('users'));
      }
    });
    this.loggedIn = !!sessionStorage.getItem('user');*/
  }

  /*// Register user with email/password
  RegisterUser(email, password) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  // Login in with email/password
  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }*/

  logUserIn(email, pass) {
    console.log(email + ' ' + pass);
    /*firebase.auth().signInWithEmailAndPassword(email, pass).then( res => {
      this.userDetails = res.user;
      this.stockConnexion(email);
      this.router.navigate(['/home']);
    }).catch( error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(error);
      console.log('error' + error);
    });*/
  }

  /*stockConnexion(email) {
    if (this.userDetails) {
      email = this.userDetails.email;
      console.log('hello im user' + ' ' + email);
      // setting user in session here --->
      this.setCurrentUser(email);
    } else {
      console.log('not working');
    }
  }

  changePassword(email) {
    return this.ngFireAuth.sendPasswordResetEmail(email);
  }

// Set current user in your session after a successful login
  setCurrentUser(email: string): void {
    sessionStorage.setItem('user', email);
    this.loggedIn = true;
  }

// Get currently logged in user from session
  getCurrentUser(): string | any {
    return sessionStorage.getItem('user') || undefined;
  }

  getAllUser() {
    this.userListRef = this.database.list('/User');
    return this.userListRef;
  }

  updateUser(key: string, u) {
    console.log(key);
    this.dbObject = this.database.object('/User/' + key);
    const vote = u.voteToken - 1;
    this.dbObject.update({
      voteToken: vote,
    });
    return u;
  }

  getUserVote(mail: string) {
    this.userRef = this.database.object('/User/' + mail);
    return this.userRef;
  }

// Clear the session for current user & log the user out
  logout() {
    sessionStorage.removeItem('user');
    this.loggedIn = false;
    // ... other code for logout
  }

// The method to check whether user is logged in or not
  isLoggedIn() {
    return this.loggedIn;
  }

  // Create
  createUser(newUser: Users) {
    this.userListRef = this.database.list('/User');
    return this.userListRef.push({
      nom: newUser.Nom,
      prenom: newUser.Prenom,
      mail: newUser.Email,
    });
  }*/
}
