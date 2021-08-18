// bootstrap logic to launch app in browser

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

// Angular will first look for the AppModule component. This component has the bootstrap metadata which lists components to use as the starting component(AppComponent)
// AppComponent is then displayed inside the matching selector listed in the metadata on the index.html file.
platformBrowserDynamic().bootstrapModule(AppModule);
