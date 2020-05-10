import { ArticlesComponent } from "./coponents/profile/user-content-menu/articles/articles.component";
import { UserSecondaryInfoComponent } from "./coponents/profile/user-content-menu/user-secondary-info/user-secondary-info.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "profile",
    pathMatch: "full",
  },
  {
    path: "profile",
    component: UserSecondaryInfoComponent,
  },
  {
    path: "activity",
    loadChildren: () =>
      import("../app/modules/activity/activity.module").then(
        (m) => m.ActivityModule
      ),
  },
  {
    path: "article",
    component: ArticlesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
