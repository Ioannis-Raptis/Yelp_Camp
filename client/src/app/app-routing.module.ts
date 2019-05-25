import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampgroundsComponent } from './components/campgrounds/campgrounds.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CreateCampgroundComponent } from './components/create-campground/create-campground.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'campgrounds', component: CampgroundsComponent},
  {path: 'campgrounds/new', component: CreateCampgroundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
