import { Component, OnInit } from '@angular/core';
import { CampgroundService } from 'src/app/services/campground.service';
import { ActivatedRoute } from '@angular/router';
import { Campground } from 'src/app/interfaces/campground.interface';
import { Comment } from 'src/app/interfaces/comment.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})

export class CreateCommentComponent implements OnInit {

  public campground: Campground;
  public myText = '';
  public myAuthor = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private campgroundService: CampgroundService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.campgroundService.getById(id).subscribe(data => {
        this.campground = data;
      });
    });

  }

  public async submitComment(): Promise<void> {

    const myComment: Comment = {
      text: this.myText
    };

    this.campgroundService.addComment(this.campground._id, myComment)
      .subscribe((res) => {
        this.router.navigate(['/campgrounds/' + this.campground._id ]);
    });

  }

}

