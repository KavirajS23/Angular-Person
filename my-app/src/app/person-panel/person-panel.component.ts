import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-panel',
  templateUrl: './person-panel.component.html',
  styleUrls: ['./person-panel.component.css']
})
export class PersonPanelComponent implements OnInit {
  selectedListItem: any;
  isAddSelected: string;
  constructor() { }

  ngOnInit() {
  }

  onSelectListItem(item) {
    this.selectedListItem = item;
  }
}
