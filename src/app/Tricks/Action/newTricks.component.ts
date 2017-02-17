import { Component } from '@angular/core';

import { Tricks } from './../Model/Tricks';

@Component({
    selector: 'tricks-form',
    templateUrl: '../View/newTricks.component.html'
})

export class NewTricksComponent {
    tricks = new Tricks('', '', '');

    groups = [
      'Old School', 'Flip', 'Grabs', 'New Age'
    ];

    newTricks(name, group, resume) {
        this.tricks = new Tricks(name, group, resume);
        console.log(this.tricks);
    }
}