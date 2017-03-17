import { Component } from '@angular/core';
import { LoginService } from "./Login.service";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{

  private loginForm: FormGroup;
  private error: string = '';

  constructor(
      private formBuilder: FormBuilder,
      private loginService: LoginService,
      private router: Router
  ) {
    this.loginForm = formBuilder.group({
      '_username': ['', Validators.required],
      '_password': ['', Validators.required]
    });
  }

  onSubmit() {
    this.loginService.login(this.loginForm.value)
        .subscribe(
            data => {
              localStorage.setItem('token', data.token);
              this.router.navigate(['post']);
            },
            error => this.error = error.message
        );
  }
}
