import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PersonListPanelComponent } from './person-list-panel.component';
import { PersonInfoPanelComponent } from './person-info-panel/person-info-panel.component';

const personRoutes: Routes = [
  { path: '', component: PersonListPanelComponent, children: [
      { path: 'new', component: PersonInfoPanelComponent },
      { path: ':id', component: PersonInfoPanelComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(personRoutes)],
  exports: [RouterModule]
})
export class PersonRoutingModule {

}
