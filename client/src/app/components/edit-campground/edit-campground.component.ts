import { Component, OnInit } from '@angular/core';
import { CampgroundService } from 'src/app/services/campground.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Campground } from 'src/app/interfaces/campground.interface';

@Component({
  selector: 'app-edit-campground',
  templateUrl: './edit-campground.component.html',
  styleUrls: ['./edit-campground.component.css']
})
export class EditCampgroundComponent implements OnInit {
  public campground: Campground;
  public myName = '';
  public myImageUrl = '';
  public myDescription: '';

  constructor(private route: ActivatedRoute,
              private campgroundService: CampgroundService,
              private router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.campgroundService.getById(id).subscribe(data => {
        this.campground = data;
      });
    });
  }

  public async submit(): Promise<void> {

    const myCampground: Campground = {
      name: this.myName,
      imageUrl: this.myImageUrl,
      description: this.myDescription,
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
