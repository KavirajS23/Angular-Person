import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public selectedEntity = 'person';

  entitySelected(event) {
    this.selectedEntity = event;
  }
}
