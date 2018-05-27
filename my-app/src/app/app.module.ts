import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { LinesComponent } from "./lines/lines.component";
import { AppRoutingModule } from ".//app-routing.module";

@NgModule({
  declarations: [AppComponent, LinesComponent],
  imports: [BrowserModule, HttpModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
