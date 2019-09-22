import { Component, OnInit } from '@angular/core';
import { User } from '../core/models/users';
import { UserService } from '../core/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  lstUsers: User[];

  constructor(private userService: UserService) {
    this.getlstUser();
  }

  ngOnInit() {
  }


  getlstUser() {

    this.userService.getUsers().subscribe(res => {
      this.lstUsers = res;
    });

  }


}
