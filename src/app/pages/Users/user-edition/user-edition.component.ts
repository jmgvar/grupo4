import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/services/users-service.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-edition',
  templateUrl: './user-edition.component.html',
  styleUrls: ['./user-edition.component.css']
})
export class UserEditionComponent implements OnInit {

  user: User;

  constructor(private userService: UsersServiceService) { 
    
    userService.getUser().subscribe(data => {
      console.log(data.status);
      this.user = data['results'];
    });;


  }

  ngOnInit(): void {
  }

  saveUser(): void {

    if (this.user.id) {
      this.userService.createUser(this.user).subscribe();
    } else {
      this.userService.updateUser(this.user).subscribe();
    }
  }



}
