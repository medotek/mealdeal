import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import {FirebaseUser, FirebaseX} from '@ionic-native/firebase-x/ngx';
import {Router} from '@angular/router';
import {UserService} from "../entity/user.service";
import {User} from "../entity/user";


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  differentPassword = false;

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {}

  createAccount(nickname, email, password, confirmPassword) {
    if (password.value === confirmPassword.value) {
      this.differentPassword = false;

      this.auth.createAccount(email.value, password.value);

      if(this.auth.getErrorCode()) {
        alert(this.auth.getErrorMessage());
      } else {
        let user = new User();
        this.auth.getCurrentUser().then((firebaseUser: FirebaseUser) => {
          user.uid = firebaseUser.uid;
          user.nickname = nickname.value;
          var date = new Date();
          user.creationDate = new Date(date.getTime() -date.getTimezoneOffset()*60000);
          this.addUser(user);
          this.router.navigate(['/home']);
        })
          .catch((error) => {
            alert(error)
          });

      }

    } else {
      alert('Les mots de passes ne sont pas identiques !');
    }
  }


  addUser(user) {
      this.userService.addUser(user).subscribe(() => {
        console.log("User added to Mongodb");
      });
  }
}
