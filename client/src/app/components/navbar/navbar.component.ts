import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user = '';

  constructor(private jwtservice: JwtService,
              private router: Router) { }

  ngOnInit() {
    if (this.jwtservice.loggedIn) {
    this.user = localStorage.getItem('username');
    }
}

  public logout() {
    this.jwtservice.logout();
    this.router.navigate(['']);
  }

}
