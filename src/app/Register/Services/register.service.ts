import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";

@Injectable()
export class RegisterService {

    // Api url for register method.
    private apiUrl = 'http://127.0.0.1:8000/api/register';

    constructor(private http: Http) {}

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    register(email, username, password) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiUrl, { email, username, password }, options);
    }
}
