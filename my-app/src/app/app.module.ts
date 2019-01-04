import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LspComponent } from './lsp/lsp.component';
import { PersonPanelComponent } from './person-panel/person-panel.component';
import { AddressPanelComponent } from './address-panel/address-panel.component';
import { PersonListPanelComponent } from './person-panel/person-list-panel/person-list-panel.component';
import { PersonInfoPanelComponent } from './person-panel/person-info-panel/person-info-panel.component';
import { AddressInfoPanelComponent } from './address-panel/address-info-panel/address-info-panel.component';
import { AddressListPanelComponent } from './address-panel/address-list-panel/address-list-panel.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LspComponent,
    PersonPanelComponent,
    AddressPanelComponent,
    PersonListPanelComponent,
    PersonInfoPanelComponent,
    AddressInfoPanelComponent,
    AddressListPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
