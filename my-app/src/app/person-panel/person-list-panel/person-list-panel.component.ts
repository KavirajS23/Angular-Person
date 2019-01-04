import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-person-list-panel',
  templateUrl: './person-list-panel.component.html',
  styleUrls: ['./person-list-panel.component.css']
})
export class PersonListPanelComponent implements OnInit {
  @Output() selectedItem = new EventEmitter<{}>();
  @Output() addSelected = new EventEmitter<void>();
  entityMetaData: string[] = ["SNO", "Firstname", "Lastname", "Email", "Admin", "Delete?"];
  entityActualData: {};
  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    this.http.get('assets/person.json').subscribe(data => {
      this.entityActualData = data;
      this.selectedItem.emit(this.entityActualData[0]);
    });
  }

  onListItemSelect(item) {
    this.selectedItem.emit(item);
  }

  onSelectAdd() {    
    this.selectedItem.emit();
  }
}
