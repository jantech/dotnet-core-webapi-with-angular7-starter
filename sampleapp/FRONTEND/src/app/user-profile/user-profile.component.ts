import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../core/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../core/models/users';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User;
  userId: number;
  constructor(private userService: UserService,
              private router: Router,
              private activateRoute: ActivatedRoute) {
    activateRoute.params.subscribe(x => {
      // console.log(x);
      this.userId = +x.id;
      // console.log(this.userId);
    });
  }

  ngOnInit() {

    setTimeout(() => {
      this.getUserById(this.userId);
    }, 500);

  }

  getUserById(id: number) {

    this.userService.getUser(this.userId).subscribe(res => {
      console.log(res);
      this.user = res;
    });

    console.log(this.user);
  }

}
