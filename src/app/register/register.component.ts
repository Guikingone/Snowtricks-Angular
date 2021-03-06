import { Component, OnInit } from '@angular/core';
import { RegisterService } from "./register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
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
        .subscribe(
            data => console.log(data)
        );
  }
}
