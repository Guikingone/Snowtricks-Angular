import { Component, OnInit } from '@angular/core';
import { LoginService } from "../_Services/login.service";

@Component({
    selector: 'app-login',
    templateUrl: '../_Views/login.component.html',
    styleUrls: ['../_Assets/login.component.css']
})

export class LoginComponent implements OnInit {

    constructor(private login: LoginService) {}

    ngOnInit(): void {
        this.Login();
    }

    Login() {

    }
}
