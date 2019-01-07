import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonService } from '../person.service';

@Component({
    selector: 'app-person-list-panel',
    templateUrl: './person-list-panel.component.html',
    styleUrls: ['./person-list-panel.component.css']
})
export class PersonListPanelComponent implements OnInit {
    entityMetaData: string[] = ['SNO', 'Firstname', 'Lastname', 'Email', 'Admin', 'Delete?'];
    entityActualData: {};
    constructor(private http: HttpClient,
                private personService: PersonService) {

    }

    ngOnInit() {
      this.http.get('assets/person.json').subscribe(data => {
        this.entityActualData = data;
        this.personService.selectedListItem.emit(this.entityActualData[0]);
      });
    }

    onListItemSelect(item) {
      this.personService.selectedListItem.emit(item);
    }

    onSelectAdd() {
      this.personService.selectedListItem.emit();
    }
}
