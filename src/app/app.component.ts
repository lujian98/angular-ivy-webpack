import { Component } from "@angular/core";

@Component({
  selector: "hellow-app",
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  message = "Hoo Ah!";

  constructor() {
    console.log(' angular 13 with webpack')
  }
}
