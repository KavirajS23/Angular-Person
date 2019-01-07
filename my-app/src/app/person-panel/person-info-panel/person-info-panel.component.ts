import { Component, OnInit, Input, DoCheck } from '@angular/core';

import { PersonModel } from '../person.model';
import { PersonService } from '../person.service';

@Component({
    selector: 'app-person-info-panel',
    templateUrl: './person-info-panel.component.html',
    styleUrls: ['./person-info-panel.component.css']
})
export class PersonInfoPanelComponent implements DoCheck {

    personObj = new PersonModel();
    @Input() selectedListItem: PersonModel;

    constructor(private personService: PersonService) {
      this.personService.selectedListItem.subscribe(
        (selectedItem: any) => this.selectedListItem = selectedItem
      );
    }

    ngDoCheck() {
      if (this.selectedListItem) {
        this.personObj.SNO = this.selectedListItem.SNO;
        this.personObj.firstName = this.selectedListItem.firstName;
        this.personObj.lastName = this.selectedListItem.lastName;
        this.personObj.email = this.selectedListItem.email;
        this.personObj.isAdmin = this.selectedListItem.isAdmin;
      } else {
        this.personObj = new PersonModel();
      }
    }

}
