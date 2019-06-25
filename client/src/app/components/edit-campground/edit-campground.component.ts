import { Component, OnInit } from '@angular/core';
import { CampgroundService } from 'src/app/services/campground.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Campground } from 'src/app/interfaces/campground.interface';
import { Comment } from 'src/app/interfaces/comment.interface';

@Component({
  selector: 'app-edit-campground',
  templateUrl: './edit-campground.component.html',
  styleUrls: ['./edit-campground.component.css']
})
export class EditCampgroundComponent implements OnInit {
  public campground: Campground;
  public myName = '';
  public myImageUrl = '';
  public myDescription = '';
  public myId = '';
  public myComments: Comment[];

  constructor(private route: ActivatedRoute,
              private campgroundService: CampgroundService,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.campgroundService.getById(id).subscribe(data => {
        this.campground = data;
        this.myId = data._id;
        this.myName = data.name;
        this.myComments = data.comments;
        this.myDescription = data.description;
        this.myImageUrl = data.imageUrl;
      });
    });
  }

  public async submit(): Promise<void> {

    const myCampground: Campground = {
      name: this.myName,
      comments: this.myComments,
      imageUrl: this.myImageUrl,
      description: this.myDescription,
      _id: this.myId,
    };

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const campgroundObv = this.campgroundService.update(id, myCampground);
      campgroundObv.subscribe(() => {
        this.router.navigate(['/campgrounds']);
      });
    });
  }

}
