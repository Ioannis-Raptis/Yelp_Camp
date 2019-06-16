import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CampgroundsComponent } from './components/campgrounds/campgrounds.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateCampgroundComponent } from './components/create-campground/create-campground.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CampgroundDetailComponent } from './components/campground-detail/campground-detail.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CampgroundsComponent,
    HeaderComponent,
    FooterComponent,
    CreateCampgroundComponent,
    NavbarComponent,
    CampgroundDetailComponent,
    CreateCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
