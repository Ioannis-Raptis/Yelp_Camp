import { Component, OnInit } from '@angular/core';
import { Campground } from 'src/app/interfaces/campground.interface';

@Component({
  selector: 'app-campgrounds',
  templateUrl: './campgrounds.component.html',
  styleUrls: ['./campgrounds.component.css']
})
export class CampgroundsComponent implements OnInit {

  public campgrounds: Campground [] = [
    // tslint:disable-next-line:max-line-length
    {name: 'Salmon Creek', image: 'https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'},
    // tslint:disable-next-line:max-line-length
    {name: 'Granite Hill', image: 'https://images.unsplash.com/photo-1536650135175-9b3cd4f36cff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'},
    // tslint:disable-next-line:max-line-length
    {name: 'Mountain Goat\'s Rest', image: 'https://images.unsplash.com/photo-1494137319847-a9592a0e73ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
