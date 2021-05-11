import { Component, OnInit } from '@angular/core';
import {UserService} from '../entity/user.service';
import {User} from '../entity/user';

@Component({
  selector: 'app-compte-infos',
  templateUrl: './compte-infos.page.html',
  styleUrls: ['./compte-infos.page.scss'],
})
export class CompteInfosPage implements OnInit {
  userId = 'yQmExEJR15VWeuKaiAKjufkjNuR2';
  public nickname;
  public creationDate;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserInfos(this.userId).subscribe(res => {
      this.nickname = res.nickname;
    });
  }

}
