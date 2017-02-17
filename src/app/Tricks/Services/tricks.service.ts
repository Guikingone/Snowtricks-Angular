import { Injectable } from "@angular/core";

import {Tricks} from "../Model/Tricks";
import {Http, Response, Jsonp} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TricksService {
    private apiUrl: 'https://guillaumeloulier.firebaseio.com/name';

    constructor(private http: Jsonp) {}

    getTricks(): Observable<Tricks[]> {
        return this.http.get(this.apiUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }
}