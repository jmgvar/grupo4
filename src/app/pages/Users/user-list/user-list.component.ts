import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/services/users-service.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: Array<User> = [];
  user: User;

  constructor(private userService: UsersServiceService) {
    userService.getUsers().subscribe(data => {
      console.log(data.status);
      this.userList = data['results'];
    });;
  }

  ngOnInit(): void {
  }

  deleteUser(): void {
    this.userService.deleteUser(this.user).subscribe();
  }

}






