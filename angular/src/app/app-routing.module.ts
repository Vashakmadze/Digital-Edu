import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AppComponent } from './app.component';
import { SectionnewsComponent } from "./sectionnews/sectionnews.component";
import { AboutComponent } from './about/about.component';
import { ContactComponent} from './contact/contact.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "news",
    component: SectionnewsComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
  // {
  //   path: "about",
  //   component: AboutComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [HomeComponent, NewsComponent ]
