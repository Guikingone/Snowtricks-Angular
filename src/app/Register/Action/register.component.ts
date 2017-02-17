import {Component, OnInit} from '@angular/core';

import { RegisterService }  from "../Services/register.service";

@Component({
    selector: 'app-register',
    templateUrl: '../View/register.component.html',
    styleUrls: ['../Assets/register.component.css']
})

export class RegisterComponent implements OnInit {

    constructor(private registerService: RegisterService) {}

    ngOnInit(): void {

    }

    register(email: string, username: string, password: string) {
        if (!email || !username || !password) {
            return;
        }

        this.registerService.register(email, username, password)
    }
}
