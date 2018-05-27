import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LinesComponent } from "./lines/lines.component";

const routes: Routes = [{ path: "lines", component: LinesComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
