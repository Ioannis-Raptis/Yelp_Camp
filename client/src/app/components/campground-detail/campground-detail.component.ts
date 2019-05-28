import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campground } from 'src/app/interfaces/campground.interface';
import { CampgroundService } from 'src/services/campground.service';

@Component({
  selector: 'app-campground-detail',
  templateUrl: './campground-detail.component.html',
  styleUrls: ['./campground-detail.component.css']
})

export class CampgroundDetailComponent implements OnInit {
  public campground: Campground;

  constructor(private route: ActivatedRoute,
              private campgroundService: CampgroundService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.campgroundService.getById(id).subscribe(data => {
      this.campground = data;
      });
    });
  }

}
