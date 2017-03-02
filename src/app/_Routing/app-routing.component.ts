import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

// Components
import { HomeComponent } from "../_Components/home.component";
import { TricksComponent } from "../_Components/tricks.component";
import { NewTricksComponent } from "../_Components/newTricks.component";
import { TricksDetailsComponent } from "../_Components/tricks_details.component";
import { CommunityComponent } from "../_Components/community.component";
import { RegisterComponent } from "../_Components/register.component";
import { LoginComponent } from "../_Components/login.component";

// Errors components
import { NotFoundComponent } from "../_Components/notFound.component";


const routes: Routes = [
    // Homepage redirection.
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    // Main component.
    { path: 'home', component: HomeComponent },
    { path: 'tricks', component: TricksComponent },
    { path: 'tricks/new', component: NewTricksComponent },
    { path: 'tricks/:id', component: TricksDetailsComponent },
    { path: 'community', component: CommunityComponent },
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