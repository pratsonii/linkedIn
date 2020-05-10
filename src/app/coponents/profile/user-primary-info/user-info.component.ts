import { UserService } from "./user.service";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.less"],
})
export class UserInfoComponent implements OnInit {
  user$: Observable<user>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user$ = this.userService.getUserDetails();
  }
}
