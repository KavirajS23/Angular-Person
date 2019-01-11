import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LspComponent } from './lsp/lsp.component';
import { PersonListPanelComponent } from './lsp/person-list-panel/person-list-panel.component';
import { PersonInfoPanelComponent } from './lsp/person-list-panel/person-info-panel/person-info-panel.component';
import { AddressInfoPanelComponent } from './lsp/address-list-panel/address-info-panel/address-info-panel.component';
import { AddressListPanelComponent } from './lsp/address-list-panel/address-list-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonService } from './person.service';
import { AddressService } from './address.service';

@NgModule({
  declarations: [
    AppComponent,
    LspComponent,
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
  providers: [PersonService, AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
