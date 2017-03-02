import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class LoginService {

    /** @type {string} */
    apiUrl: string = 'http://localhost:8000/api/login';

    /**
     * LoginService constructor
     * @param http
     */
    constructor(private http: Http) {}
}