import {Component, OnInit} from '@angular/core';
import {LoginService} from "../Services/login.services";

@Component({
    selector: 'app-login',
    templateUrl: '../View/login.component.html',
    styleUrls: ['../Assets/login.component.css']
})

export class LoginComponent implements OnInit {

    constructor(private login: LoginService) {}

    ngOnInit(): void {
        this.Login();
    }

    Login() {

    }
}
