import { Component, OnInit, EventEmitter } from '@angular/core';
import { PersonService } from './person.service';


@Component({
    selector: 'app-person-panel',
    templateUrl: './person-panel.component.html',
    styleUrls: ['./person-panel.component.css'],
    providers: [PersonService]
})
export class PersonPanelComponent implements OnInit {

    constructor(private personService: PersonService) { }

    ngOnInit() {

    }

}
