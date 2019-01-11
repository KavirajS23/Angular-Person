import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LspComponent } from './lsp/lsp.component';
import { PersonListPanelComponent } from './lsp/person-list-panel/person-list-panel.component';
import { AddressListPanelComponent } from './lsp/address-list-panel/address-list-panel.component';
import { PersonInfoPanelComponent } from './lsp/person-list-panel/person-info-panel/person-info-panel.component';
import { AddressInfoPanelComponent } from './lsp/address-list-panel/address-info-panel/address-info-panel.component';

const routes: Routes = [
  { path: '', component: LspComponent, children: [
      { path: 'person', component: PersonListPanelComponent, children: [
          { path: 'new', component: PersonInfoPanelComponent },
          { path: ':id', component: PersonInfoPanelComponent }
      ] },
      { path: 'address', component: AddressListPanelComponent, children: [
          { path: 'new', component: AddressInfoPanelComponent },
          { path: ':id', component: AddressInfoPanelComponent }
      ] }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
