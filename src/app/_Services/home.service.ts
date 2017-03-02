import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class HomeService {

    protected apiUrl = 'http://localhost:8000/api/tricks';

    constructor(protected http: Http){}

    getTricks() {
        return this.http.get(this.apiUrl)
                        .map(
                            (response: Response) => response.json()
                        );
    }
}
