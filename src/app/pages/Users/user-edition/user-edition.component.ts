import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServiceService } from 'src/app/services/users-service.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-edition',
  templateUrl: './user-edition.component.html',
  styleUrls: ['./user-edition.component.css']
})
export class UserEditionComponent implements OnInit {

  user: User;

  constructor(private userService: UsersServiceService, private router: Router) { 
    
    userService.getUser().subscribe(data => {
      console.log(data.status);
      this.user = data['data'];
    });;


  }

  ngOnInit(): void {
  }

  saveUser(): void {

    if (this.user.id) {

      console.log("Se crea el usuario");
      this.userService.createUser(this.user).subscribe();
    } else {
      console.log("Se modifica el usuario");
      this.userService.updateUser(this.user).subscribe();
    }

    this.router.navigate(["/userList"]);
  }



}
