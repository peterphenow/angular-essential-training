// 02_01b
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
  // imports is used to bring in other Angular modules that this module will need
  imports: [BrowserModule],
  // declarations is used to make components, directives, and pipes available to the module that don't come from another module.
  declarations: [AppComponent],
  // bootstrap is used for root module and let Angular know which component/s starting point for bootstrap process
  // i.e. entry point for App code
  bootstrap: [AppComponent],
})
export class AppModule {}
