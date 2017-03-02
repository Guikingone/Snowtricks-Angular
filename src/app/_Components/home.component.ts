import { Component, OnInit } from '@angular/core';
import { HomeService } from "../_Services/home.service";

@Component({
    selector: 'app-home',
    templateUrl: '../_Views/home.component.html',
    styleUrls: ['../_Assets/home.component.css']
})

export class HomeComponent implements OnInit {

    tricks: Object[];

    constructor(protected home: HomeService){}

    ngOnInit() {
        this.home.getTricks()
                 .subscribe(
                     data => {
                         const tricksArray = [];
                         for (let key in data) {
                             tricksArray.push(data[key]);
                         }
                         this.tricks = tricksArray;
                     }
                 );
    }
}
