import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

// Components
import { HomeComponent } from "../Home/home.component";
import { TricksComponent } from "../Tricks/Action/tricks.component";
import { RegisterComponent } from "../Register/Action/register.component";
import { LoginComponent } from "../Login/Action/login.component";
import { NewTricksComponent } from "../Tricks/Action/newTricks.component";

// Errors components
import { NotFoundComponent } from "../NotFound/Action/notFound.component";


const routes: Routes = [
    // Homepage redirection.
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    // Main component.
    { path: 'home', component: HomeComponent },
    { path: 'tricks', component: TricksComponent },
    { path: 'tricks/new', component: NewTricksComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}