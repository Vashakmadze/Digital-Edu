import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { VideoComponent } from './home/video/video.component';
import { NewsComponent } from './home/news/news.component';
import { FeaturedComponent } from './home/featured/featured.component';
import { SectionnewsComponent } from './sectionnews/sectionnews.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AboutsectionComponent } from './about/aboutsection/aboutsection.component';
import { UsComponent } from './about/us/us.component';
import { TeamComponent } from './about/team/team.component';
import { BackComponent } from './about/back/back.component';
import { BoutComponent } from './contact/bout/bout.component';
import { MapComponent } from './contact/map/map.component';
import { GobackComponent } from './contact/goback/goback.component';
// import { AppRoutingModule, routingComponents  } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    VideoComponent,
    NewsComponent,
    FeaturedComponent,
    SectionnewsComponent,
    AboutComponent,
    ContactComponent,
    AboutsectionComponent,
    UsComponent,
    TeamComponent,
    BackComponent,
    BoutComponent,
    MapComponent,
    GobackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
