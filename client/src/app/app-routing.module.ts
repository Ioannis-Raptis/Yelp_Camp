import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampgroundsComponent } from './components/campgrounds/campgrounds.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateCampgroundComponent } from './components/create-campground/create-campground.component';
import { CampgroundDetailComponent } from './components/campground-detail/campground-detail.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './guards/authGuard.service';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'campgrounds', component: CampgroundsComponent},
  {path: 'campgrounds/new', canActivate: [AuthGuardService], component: CreateCampgroundComponent},
  {path: 'campgrounds/:id', component: CampgroundDetailComponent},
  {path: 'campgrounds/:id/comments/new', canActivate: [AuthGuardService], component: CreateCommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
