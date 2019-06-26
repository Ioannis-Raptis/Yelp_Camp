import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  private campgroundId: string;

  constructor(private route: ActivatedRoute,
              private campgroundService: CampgroundService,
              private router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.campgroundId = params.get('id');

      this.getCampground();
      this.getComments();
    });
  }

  public async delete(): Promise<void> {
    this.campgroundService.delete(this.campgroundId).subscribe( () => {
      this.router.navigate(['/campgrounds']);
    });
  }

  public async deleteComment(commentId: string): Promise<void> {
    this.campgroundService.deleteComment(this.campgroundId, commentId).subscribe( () => {
      this.getComments();
    });
  }

  private getCampground(): void {
    this.campgroundService.getById(this.campgroundId).subscribe(data => {
      this.campground = data;
    });
  }

  private getComments(): void {
    this.campgroundService.getComments(this.campgroundId).subscribe(data => {
      this.comments = data;
    });
  }
}
