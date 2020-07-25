import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-theme",
  templateUrl: "./theme.component.html",
  styleUrls: ["./theme.component.scss"],
})
export class ThemeComponent implements OnInit {
  toggleSwitch = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
      this.document.documentElement.setAttribute("data-theme", currentTheme);

      if (currentTheme === "dark") {
        this.toggleSwitch = true;
      }
    }
  }
  switchTheme(e) {
    if (e.target.checked) {
      this.toggleSwitch = true;
      this.document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      this.toggleSwitch = false;
      this.document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }
}
