import { Component, OnInit } from '@angular/core';
import { TricksService } from "./tricks.service";

@Component({
  selector: 'app-tricks',
  templateUrl: './tricks.component.html',
  styleUrls: ['./tricks.component.css']
})

export class TricksComponent implements OnInit {

  tricks: Object[];

  constructor(private tricksService: TricksService) {}

  ngOnInit(): void {
    this.getTricks();
  }

  getTricks() {
    this.tricksService.getTricks()
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
