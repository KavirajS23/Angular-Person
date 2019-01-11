import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class SelectorService {
    selectedListItem = new EventEmitter<any>();
    constructor() { }
}
