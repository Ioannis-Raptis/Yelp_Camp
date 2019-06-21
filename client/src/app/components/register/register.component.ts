import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/services/jwt.service';
import { User } from 'src/app/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

    const userObv: any = this.jwtService.register(myUser.username, myUser.password);
    userObv.subscribe((res) => {
      if (res.success === false) {
        alert(res.message);
      } else {
        this.router.navigate(['/campgrounds']);
      }
    });

  }

}
