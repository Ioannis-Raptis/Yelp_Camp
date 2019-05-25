import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/app.constants';
import { Campground } from 'src/app/interfaces/campground.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CampgroundService {
  private campgroundsUrl = `${Configuration.apiHost}${Configuration.apiPort}/campgrounds`;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Campground[]> {
    return this.http.get<Campground[]>(this.campgroundsUrl);
  }

  public addNew(campground: Campground): Observable<void> {
    return this.http.post<void>(this.campgroundsUrl, {
      name: campground.name,
      imageUrl: campground.imageUrl,
    });
  }

}
