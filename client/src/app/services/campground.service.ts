import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/app.constants';
import { Campground } from 'src/app/interfaces/campground.interface';
import { Comment } from 'src/app/interfaces/comment.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class CampgroundService {
  private campgroundsUrl = `${Configuration.apiHost}${Configuration.apiPort}/campgrounds`;

  constructor(private http: HttpClient,
              private router: Router) { }

  public getAll(): Observable<Campground[]> {
    return this.http.get<Campground[]>(this.campgroundsUrl);
  }

  public getById(id: string): Observable<Campground> {
    return this.http.get<Campground>(this.campgroundsUrl + '/' + id);
  }

  public create(campground: Campground): Observable<void> {
    return this.http.post<void>(this.campgroundsUrl, {
      name: campground.name,
      imageUrl: campground.imageUrl,
      description: campground.description
    }, {headers: {Authorization: 'Bearer ' + localStorage.getItem('accessToken')}});
  }

  public update(id: string, campground: Campground): Observable<void> {
    return this.http.put<void>(this.campgroundsUrl + '/' + id, {
      name: campground.name,
      imageUrl: campground.imageUrl,
      description: campground.description
    });
  }

  public addComment(id: string, comment: Comment): Observable<void> {
      return this.http.post<void>(this.campgroundsUrl + '/' + id + '/' + 'comments', {
        text: comment.text,
      }, {headers: {Authorization: 'Bearer ' + localStorage.getItem('accessToken')}});
    }

  public getComments(id: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.campgroundsUrl + '/' + id + '/' + 'comments');
  }

}
