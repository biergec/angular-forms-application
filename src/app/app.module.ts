import { GenderInfoService } from "./services/gender/gender-info.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SampleFormsComponent } from "./components/sample-forms/sample-forms.component";
import { NavsComponent } from './components/navs/navs.component';

@NgModule({
  declarations: [AppComponent, SampleFormsComponent, NavsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [GenderInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
