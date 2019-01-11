import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { PersonModel } from '../../person.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { PersonService } from 'src/app/person.service';

@Component({
    selector: 'app-person-info-panel',
    templateUrl: './person-info-panel.component.html',
    styleUrls: ['./person-info-panel.component.css']
})
export class PersonInfoPanelComponent implements OnInit, OnDestroy {

    personObj = new PersonModel();
    paramsSubscription: Subscription;
    selectedListItemId: number;
    @Input() selectedListItem: PersonModel;

    constructor(private route: ActivatedRoute,
                private personService: PersonService) {
    }

    ngOnInit() {
      this.paramsSubscription = this.route.params
        .subscribe(
          (params: Params) => {
            this.selectedListItemId = params['id'];
            if (this.selectedListItemId) {
              this.onSelectListItem(this.selectedListItemId);
            } else {
              this.personObj = new PersonModel();
            }
          }
        );
    }

    onSelectListItem(id: number) {
      this.personService.getPerson(id)
        .subscribe(
          (response) => {
            this.personObj = response;
          }
        );
    }

    onSubmit() {
      this.personService.createPerson(this.personObj)
        .subscribe(
          (response: PersonModel) => {
            this.personService.submitedPerson.next(response);
          }
        );
    }

    ngOnDestroy() {
      this.paramsSubscription.unsubscribe();
    }
}
