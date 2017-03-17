import { Component } from '@angular/core';

import { Tricks } from '../tricks/Tricks';

@Component({
    selector: 'tricks-form',
    templateUrl: '../_Views/newTricks.component.html'
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