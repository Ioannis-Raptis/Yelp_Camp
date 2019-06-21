import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campground } from 'src/app/interfaces/campground.interface';
import { Comment } from 'src/app/interfaces/comment.interface';
import { CampgroundService } from 'src/app/services/campground.service';

@Component({
  selector: 'app-campground-detail',
  templateUrl: './campground-detail.component.html',
  styleUrls: ['./campground-detail.component.css']
})

export class CampgroundDetailComponent implements OnInit {
  public campground: Campground;
  public comments: Comment[];

  constructor(private route: ActivatedRoute,
              private campgroundService: CampgroundService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.campgroundService.getById(id).subscribe(data => {
        this.campground = data;
      });

      this.campgroundService.getComments(id).subscribe(data => {
        this.comments = data;
        });
    });
  }

}
