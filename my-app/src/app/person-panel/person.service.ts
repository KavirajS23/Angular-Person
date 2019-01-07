import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class PersonService {
    selectedListItem = new EventEmitter<any>();
    constructor() { }

    onSelectListItem(item) {
        this.selectedListItem = item;
    }
}
