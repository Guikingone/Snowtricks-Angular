import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Main components
import { AppComponent } from './app.component';
import { HomeComponent } from "./_Components/home.component";
import { TricksComponent } from "./_Components/tricks.component";
import { NewTricksComponent } from "./_Components/newTricks.component";
import { TricksDetailsComponent } from "./_Components/tricks_details.component";
import { CommunityComponent } from "./_Components/community.component";
import { RegisterComponent } from "./_Components/register.component";
import { LoginComponent } from "./_Components/login.component";

// Errors components
import { NotFoundComponent } from "./_Components/notFound.component";

// Routing component
import { AppRoutingModule } from "./_Routing/app-routing.component";

// Services
import { TricksService } from "./_Services/tricks.service";
import { CommunityService } from "./_Services/community.service";
import { RegisterService } from "./_Services/register.service";
import { LoginService } from "./_Services/login.service";
import { HomeService } from "./_Services/home.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TricksComponent,
    NewTricksComponent,
    TricksDetailsComponent,
    CommunityComponent,
    RegisterComponent,
    LoginComponent,

    // Only for 404 purpose !
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [
      HomeService,
      TricksService,
      CommunityService,
      RegisterService,
      LoginService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
