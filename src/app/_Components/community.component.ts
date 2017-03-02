import {Component, OnInit} from "@angular/core";
import {CommunityService} from "../_Services/community.service";

@Component({
    selector: 'app-community',
    templateUrl: '../_Views/community.component.html',
    styleUrls: ['../_Assets/community.component.css']
})

export class CommunityComponent implements OnInit {

    constructor(private communityService: CommunityService) {}

    ngOnInit(): void {

    }
}