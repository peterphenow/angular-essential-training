import { Component } from "@angular/core";

// must have 2 meta-data properies at a minimum(selector and template)
@Component({
  // selector is what Angular will use to locate a custom HTML element and apply the component to.
  // found in index.html
  selector: "app-root",
  template: "<h1>My App</h1>",
})
export class AppComponent {}
