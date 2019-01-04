import { Component, OnInit, Input, DoCheck } from '@angular/core';

import { PersonModel } from '../person.model';

@Component({
  selector: 'app-person-info-panel',
  templateUrl: './person-info-panel.component.html',
  styleUrls: ['./person-info-panel.component.css']
})
export class PersonInfoPanelComponent {

  personObj = new PersonModel();

  @Input() selectedListItem: any; 

  ngDoCheck() {
    if(this.selectedListItem) {
      this.personObj.SNO = this.selectedListItem.SNO;
      this.personObj.firstName = this.selectedListItem.firstName;
      this.personObj.lastName = this.selectedListItem.lastName;
      this.personObj.email = this.selectedListItem.email;
      this.personObj.isAdmin = this.selectedListItem.isAdmin;
    } else {
      console.log(this.selectedListItem);
      this.personObj = new PersonModel();
    }
  }

}
