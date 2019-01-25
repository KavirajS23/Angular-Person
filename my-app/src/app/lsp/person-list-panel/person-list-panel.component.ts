import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PersonService } from 'src/app/person.service';
import { PersonModel } from '../person.model';

@Component({
    selector: 'app-person-list-panel',
    templateUrl: './person-list-panel.component.html',
    styleUrls: ['./person-list-panel.component.css']
})
export class PersonListPanelComponent implements OnInit {
    entityMetaData: string[] = ['ID', 'Firstname', 'Lastname', 'Email', 'Birth Date', 'Admin', 'Delete?'];
    entityActualData: PersonModel[];
    newPerson = new PersonModel();
    url: string;
    constructor(private personService: PersonService,
                private route: ActivatedRoute,
                private router: Router) {

    }

    ngOnInit() {
      this.getPersonList();
      this.personService.submitedPerson
        .subscribe(
          (response) => {
            this.newPerson = <PersonModel>response;
            this.getPersonList();
          }
        );
    }

    getPersonList() {
      this.personService.getPersonList()
        .subscribe(data => {
          this.entityActualData = <PersonModel[]>data;
          this.url = this.router.url;
          console.log(this.url);
          if (this.newPerson === undefined) {
            this.router.navigate([this.newPerson.id], {relativeTo: this.route});
          } else {
            this.router.navigate([this.entityActualData[0].id], {relativeTo: this.route});
          }
      });
    }
}
