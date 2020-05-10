import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-content",
  templateUrl: "./user-content.component.html",
  styleUrls: ["./user-content.component.less"],
})
export class UserContentComponent implements OnInit {
  activeLink = "profile";

  constructor() {}

  ngOnInit() {}

  clicked(tabName) {
    this.activeLink = tabName;
  }
}
