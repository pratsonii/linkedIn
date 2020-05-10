import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./coponents/footer/footer.component";
import { HeaderProfileComponent } from "./coponents/header/header-profile/header-profile.component";
import { HeaderComponent } from "./coponents/header/header.component";
import { CoverPhotoComponent } from "./coponents/profile/cover-photo/cover-photo.component";
import { ProfileComponent } from "./coponents/profile/profile.component";
import { ArticlesComponent } from "./coponents/profile/user-content-menu/articles/articles.component";
import { UserContentComponent } from "./coponents/profile/user-content-menu/user-content.component";
import { AboutComponent } from "./coponents/profile/user-content-menu/user-secondary-info/about/about.component";
import { EndoresmentComponent } from "./coponents/profile/user-content-menu/user-secondary-info/endoresment/endoresment.component";
import { UserSecondaryInfoComponent } from "./coponents/profile/user-content-menu/user-secondary-info/user-secondary-info.component";
import { UserDashboardComponent } from "./coponents/profile/user-dashboard/user-dashboard.component";
import { UserInfoComponent } from "./coponents/profile/user-primary-info/user-info.component";
import { VisitorsComponent } from "./coponents/profile/visitors/visitors.component";
import { PrimaryButtonDirective } from './global/directives/primary-button.directive';
import { OutlinedButtonDirective } from './global/directives/outlined-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    HeaderProfileComponent,
    CoverPhotoComponent,
    UserInfoComponent,
    UserContentComponent,
    UserSecondaryInfoComponent,
    AboutComponent,
    UserDashboardComponent,
    VisitorsComponent,
    EndoresmentComponent,
    FooterComponent,
    ArticlesComponent,
    PrimaryButtonDirective,
    OutlinedButtonDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
