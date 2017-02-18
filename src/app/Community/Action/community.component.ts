import {Component, OnInit} from "@angular/core";
import {CommunityService} from "../Services/community.service";

@Component({
    selector: 'app-community',
    templateUrl: '../View/community.component.html',
    styleUrls: ['../Assets/community.component.css']
})

export class CommunityComponent implements OnInit {

    constructor(private communityService: CommunityService) {}

    ngOnInit(): void {

    }
}