import { Injectable } from "@angular/core";
import { Http, URLSearchParams, Headers, RequestOptions, Response } from "@angular/http";
import { tokenNotExpired } from "angular2-jwt";

@Injectable()
export class LoginService {

    protected apiUrlLogin: string = 'http://localhost:8000/api/login';

    constructor(private http: Http) {}

    login(user: any) {
        let body = new URLSearchParams();
        body.append('_username', user.username);
        body.append('_password', user.password);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiUrlLogin, body.toString(), options)
                        .map((data: Response) => data.json());
    }

    logout() {
        localStorage.removeItem('token');
    }

    loggedIn() {
        return tokenNotExpired();
    }
}