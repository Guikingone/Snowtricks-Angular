import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from "./Home/home.component";
import { RegisterComponent } from "./Register/register.component";
import { LoginComponent } from "./Login/login.component";

// Errors components
import { NotFoundComponent } from "./NotFound/notFound.component";

const routes: Routes = [
  // Homepage redirection.
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Main component.
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,

    // Only for 404 purpose !
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
