import { Component } from "@angular/core";

// must have 2 meta-data properies at a minimum(selector and template)
@Component({
  // selector is what Angular will use to locate a custom HTML element and apply the component to.
  // found in index.html
  // want to use a selector with a dash because it is a custom DOM element, WC3 says dash should be included in custom elements.
  selector: "mw-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  firstMediaItem = {
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false,
  };
}
