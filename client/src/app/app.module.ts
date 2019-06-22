import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CampgroundsComponent } from './components/campgrounds/campgrounds.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateCampgroundComponent } from './components/create-campground/create-campground.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CampgroundDetailComponent } from './components/campground-detail/campground-detail.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EditCampgroundComponent } from './components/edit-campground/edit-campground.component';

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
    CreateCommentComponent,
    RegisterComponent,
    LoginComponent,
    EditCampgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
