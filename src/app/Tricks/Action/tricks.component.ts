import { Component, OnInit } from '@angular/core';
import { TricksService } from "../Services/tricks.service";
import { Tricks } from "../Model/Tricks";

@Component({
    selector: 'app-tricks',
    templateUrl: '../View/tricks.component.html',
    styleUrls: ['../assets/tricks.component.css']
})

export class TricksComponent implements OnInit {

    tricks: Tricks[];
    errorMessage: string;

    constructor(private tricksService: TricksService) {}

    ngOnInit(): void {
        this.getTricks();
    }

    getTricks() {
        this.tricksService.getTricks()
                            .subscribe(
                                tricks => this.tricks = tricks,
                                error =>  this.errorMessage = <any>error
                            );
    }
}
