import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

// Components
import { HomeComponent } from "../home/home.component";
import { TricksComponent } from "../tricks/tricks.component";
import { NewTricksComponent } from "../_Components/newTricks.component";
import { TricksDetailsComponent } from "../_Components/tricks_details.component";
import { CommunityComponent } from "../_Components/community.component";
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { AdminComponent } from "../admin/admin.component";

// Errors components
import { NotFoundComponent } from "../_Components/notFound.component";


const routes: Routes = [
    // Homepage redirection.
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    // Main component.
    { path: 'home', component: HomeComponent },
    { path: 'admin', component: AdminComponent },
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