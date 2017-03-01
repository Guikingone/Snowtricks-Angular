import { Component, OnInit } from '@angular/core';
import { HomeService } from "../Services/home.service";

@Component({
    selector: 'app-home',
    templateUrl: '../View/home.component.html',
    styleUrls: ['../Assets/home.component.css']
})

export class HomeComponent implements OnInit {

    tricks: Object[];
    errorMessage: string;

    constructor(protected home: HomeService){}

    ngOnInit() {
        this.home.getTricks()
                 .subscribe(
                        tricks => this.tricks = tricks,
                        error =>  this.errorMessage = <any>error
                 );
    }
}
