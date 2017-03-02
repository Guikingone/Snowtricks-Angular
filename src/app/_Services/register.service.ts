import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";

@Injectable()
export class RegisterService {

    // Api url for register method.
    private apiUrl = 'http://localhost:8000/api/register';

    constructor(private http: Http) {}

    register(email, username, password) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiUrl, { email, username, password }, options)
                        .map((data: Response) => data.json());
    }
}
