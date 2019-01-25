import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddressListPanelComponent } from './address-list-panel.component';
import { AddressInfoPanelComponent } from './address-info-panel/address-info-panel.component';

const addressRoutes: Routes = [
  { path: '', component: AddressListPanelComponent, children: [
      { path: 'new', component: AddressInfoPanelComponent },
      { path: ':id', component: AddressInfoPanelComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(addressRoutes)],
  exports: [RouterModule]
})
export class AddressRoutingModule {

}
