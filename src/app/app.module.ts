import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from "./Home/home.component";
import { TricksComponent } from "./Tricks/tricks.component";
import { RegisterComponent } from "./Register/register.component";
import { NewTricksComponent } from "./Tricks/Action/newTricks.component";
import { LoginComponent } from "./Login/login.component";

// Errors components
import { NotFoundComponent } from "./NotFound/notFound.component";

// Routing component
import { AppRoutingModule } from "./app-routing.component";

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
