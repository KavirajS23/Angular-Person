import { NgModule } from '@angular/core';
import { AddressListPanelComponent } from './address-list-panel.component';
import { AddressInfoPanelComponent } from './address-info-panel/address-info-panel.component';
import { FormsModule } from '@angular/forms';
import { AddressRoutingModule } from './address-routing.module';
import { CommonModule } from '@angular/common';
import { AddressService } from 'src/app/address.service';

@NgModule({
  declarations: [
    AddressListPanelComponent,
    AddressInfoPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AddressRoutingModule
  ],
  providers: [AddressService]
})
export class AddressModule {

}
