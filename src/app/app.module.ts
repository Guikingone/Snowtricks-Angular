import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from "./Home/home.component";
import { TricksComponent } from "./Tricks/Action/tricks.component";
import { RegisterComponent } from "./Register/Action/register.component";
import { NewTricksComponent } from "./Tricks/Action/newTricks.component";
import { LoginComponent } from "./Login/Action/login.component";

// Errors components
import { NotFoundComponent } from "./NotFound/Action/notFound.component";

// Routing component
import { AppRoutingModule } from "./Routing/app-routing.component";

// Services
import { TricksService } from "./Tricks/Services/tricks.service";
import { RegisterService } from "./Register/Services/register.service";
import { LoginService } from "./Login/Services/login.services";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TricksComponent,
    RegisterComponent,
    LoginComponent,
    NewTricksComponent,

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
      TricksService,
      RegisterService,
      LoginService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
