import { Component, OnInit } from '@angular/core';
import { CampgroundService } from 'src/app/services/campground.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/interfaces/comment.interface';
import { Campground } from 'src/app/interfaces/campground.interface';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {
  public comment: Comment;
  public campground: Campground;
  public myText = '';
  public myId = '';

  constructor(private route: ActivatedRoute,
              private campgroundService: CampgroundService,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const commentId = params.get('commentId');

      this.campgroundService.getById(id).subscribe(data => {
        this.campground = data;
      });

      this.campgroundService.getCommentById(id, commentId).subscribe(commentData => {
        this.comment = commentData;
        this.myText = commentData.text;
        this.myId = commentData._id;
        });
    });
  }

  public async submitComment(): Promise<void> {

    const myComment: Comment = {
      text: this.myText,
      _id: this.myId
    };

    this.campgroundService.updateComment(this.campground._id, this.comment._id, myComment)
      .subscribe((res) => {
        this.router.navigate(['/campgrounds/' + this.campground._id ]);
    });

  }

}
