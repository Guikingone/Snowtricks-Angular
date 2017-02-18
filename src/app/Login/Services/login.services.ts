import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class LoginService {

    /** @type {string} */
    apiUrl: string = '';

    /**
     * LoginService constructor
     * @param http
     */
    constructor(private http: Http) {}

    /**
     * @returns {Observable<Response>}
     * @constructor
     */
    Login() {
        return this.http.post(this.apiUrl)
    }
}