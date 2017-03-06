import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class TricksManager {

    protected apiUrlGet = 'http://localhost:8000/api/tricks';
    protected apiUrlPost = 'http://localhost:8000/api/tricks';

    constructor(protected http: Http){}

    getTricks() {
        return this.http.get(this.apiUrlGet)
            .map(
                (response: Response) => response.json()
            );
    }

    postTricks() {
        // TODO
    }
}