import { Component, OnInit } from '@angular/core';
import {FirebaseUser, FirebaseX} from '@ionic-native/firebase-x/ngx';
import {Platform} from '@ionic/angular';
import {Router} from '@angular/router';
import {User} from "../entity/user";
import {UserService} from "../entity/user.service";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  erreurPassword = false;
  erreurMail = false;

  constructor(
    private router: Router,
    private firebase: FirebaseX,
    private platform: Platform,
    private userService: UserService) { }

  ngOnInit() {

  }

  createAccount(nickname, email, password, confirmPassword) {
    if (password.value === confirmPassword.value) {
      this.erreurPassword = false;
      this.platform.ready().then(r =>
        this.firebase.createUserWithEmailAndPassword(email.value, password.value).then(res => {
          this.erreurMail = false;
          const user = new User();

          this.getCurrentUserPromise().then((data: FirebaseUser ) => {
            user.nickname = nickname;
            const date = new Date();
            user.creationDate = new Date(date.getTime() -date.getTimezoneOffset()*60000);
            user.uid = data.uid
            this.addUser(user);
            console.log(user)
          })
          this.router.navigate(['/home']);
          //execute db queries
        }, () => {
          this.erreurMail = true;
          alert('L\'adresse mail est déjà utilisé !');
        }));
    } else {
      this.erreurPassword = true;
      alert('Les mots de passes ne sont pas identiques !');
    }
  }

 addUser(user) {
    this.platform.ready().then(() => {
      this.userService.addUser(user).subscribe((res) => {
        console.log(res);
      });
    });
  }

  getCurrentUserPromise() {
    return this.firebase.getCurrentUser()

  }
}
