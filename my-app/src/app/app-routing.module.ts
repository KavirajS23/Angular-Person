import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LspComponent } from './lsp/lsp.component';
import { PersonListPanelComponent } from './lsp/person-list-panel/person-list-panel.component';
import { PersonModule } from './lsp/person-list-panel/person.module';


const routes: Routes = [
  { path: '', component: LspComponent, children: [
    { path: 'person', loadChildren: './lsp/person-list-panel/person.module#PersonModule' },
    { path: 'address', loadChildren: './lsp/address-list-panel/address.module#AddressModule' }
  ]}
      // { path: 'person', component: PersonListPanelComponent, children: [
      //   { path: 'new', component: PersonInfoPanelComponent },
      //   { path: ':id', component: PersonInfoPanelComponent }
      // ] },
      // { path: 'address', component: AddressListPanelComponent, children: [
      //     { path: 'new', component: AddressInfoPanelComponent },
      //     { path: ':id', component: AddressInfoPanelComponent }
      // ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
