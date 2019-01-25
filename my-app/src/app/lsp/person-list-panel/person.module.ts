import { NgModule } from '@angular/core';
import { PersonListPanelComponent } from './person-list-panel.component';
import { PersonInfoPanelComponent } from './person-info-panel/person-info-panel.component';
import { FormsModule } from '@angular/forms';
import { PersonRoutingModule } from './person-routing.module';
import { CommonModule } from '@angular/common';
import { PersonService } from 'src/app/person.service';

@NgModule({
  declarations: [
    PersonListPanelComponent,
    PersonInfoPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PersonRoutingModule
  ],
  providers: [PersonService]
})
export class PersonModule {

}
