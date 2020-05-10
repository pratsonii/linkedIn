import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor() {}

  getUserDetails(): Observable<user> {
    return of({
      name: "Dmitry Kargaev",
      location: "Saint Petersburg, Russian Federation",
      bio:
        "Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS & android) and creative projects. Open to offers.",
    });
  }
}
