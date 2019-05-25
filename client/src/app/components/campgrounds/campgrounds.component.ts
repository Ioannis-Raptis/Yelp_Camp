import { Component, OnInit } from '@angular/core';
import { Campground } from 'src/app/interfaces/campground.interface';
import { CampgroundService } from 'src/services/campground.service';

@Component({
  selector: 'app-campgrounds',
  templateUrl: './campgrounds.component.html',
  styleUrls: ['./campgrounds.component.css']
})
export class CampgroundsComponent implements OnInit {
  public campgroundData: Campground[];

  constructor(private campgroundService: CampgroundService) { }

  ngOnInit() {
    this.loadCampgroundsData();
  }

  private loadCampgroundsData(): void {
  this.campgroundService.getAll()
    .subscribe((data) => {
      this.campgroundData = data;
    });
  }

}
