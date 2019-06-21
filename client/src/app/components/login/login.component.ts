import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/services/jwt.service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myUsername = '';
  public myPassword = '';

  constructor(private jwtService: JwtService,
              private router: Router) { }

  ngOnInit() {
  }

  public async submit() {

    const myUser: User = {
      username: this.myUsername,
      password: this.myPassword
    };

    const userObv = this.jwtService.login(myUser.username, myUser.password);
    userObv.subscribe(() => {
      this.router.navigate(['/campgrounds']);
    });

  }

}
