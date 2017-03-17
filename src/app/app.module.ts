import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Main components
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { TricksComponent } from "./tricks/tricks.component";
import { NewTricksComponent } from "./_Components/newTricks.component";
import { TricksDetailsComponent } from "./_Components/tricks_details.component";
import { CommunityComponent } from "./_Components/community.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from './admin/admin.component';

// Errors components
import { NotFoundComponent } from "./_Components/notFound.component";

// Routing component
import { AppRoutingModule } from "./_Routing/app-routing.component";

// Services
import { TricksService } from "./tricks/tricks.service";
import { CommunityService } from "./_Services/community.service";
import { LoginService } from "./login/Login.service";
import { RegisterService } from "./register/register.service";
import { HomeService } from "./home/home.service";
import { TricksManager } from "./_Managers/TricksManager.service";
import { Security } from "./_Services/Security.service";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    TricksComponent,
    NewTricksComponent,
    TricksDetailsComponent,
    CommunityComponent,
    RegisterComponent,
    LoginComponent,

    // Only for 404 purpose !
    NotFoundComponent,

    RegisterComponent,

    LoginComponent,

    HomeComponent,

    TricksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
      TricksManager,
      Security,
      HomeService,
      TricksService,
      CommunityService,
      RegisterService,
      LoginService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
