import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class TricksService {

    protected apiUrl = 'http://localhost:8000/api/tricks';

    constructor(protected http: Http){}

    getTricks() {
        return this.http.get(this.apiUrl)
            .map(
                (response: Response) => response.json()
            );
    }

    postTricks() {

    }
}