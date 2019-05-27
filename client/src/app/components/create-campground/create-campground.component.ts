import { Component, OnInit } from '@angular/core';
import { Campground } from 'src/app/interfaces/campground.interface';
import { CampgroundService } from 'src/services/campground.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-campground',
  templateUrl: './create-campground.component.html',
  styleUrls: ['./create-campground.component.css']
})
export class CreateCampgroundComponent implements OnInit {

  public myName = '';
  public myImageUrl = '';

  constructor(private campgroundService: CampgroundService,
              private router: Router) { }

  ngOnInit() {

  }

  public async submit(): Promise<void> {

    const myCampground: Campground = {
      name: this.myName,
      imageUrl: this.myImageUrl
    };

    const campgroundObv = this.campgroundService.create(myCampground);
    campgroundObv.subscribe(() => {
      this.router.navigate(['/campgrounds']);
    });
  }

}
