import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../app.constants';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private authUrl = `${Configuration.apiHost}${Configuration.apiPort}/authentication`;

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string) {
    return this.httpClient.post<{ accessToken: string }>(this.authUrl + '/login', { username, password }).pipe(tap(res => {
      localStorage.setItem('accessToken', res.accessToken);
      localStorage.setItem('username', username);
    }));
  }

  register(username: string, password: string) {
    return this.httpClient.post<{ accessToken: string }>(this.authUrl + '/register', { username, password }).pipe(tap(res => {
      this.login(username, password);
    }));
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('accessToken') !==  null;
  }

}
