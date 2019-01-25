import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LspComponent } from './lsp/lsp.component';
import { PersonService } from './person.service';
import { AddressService } from './address.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LspComponent,
    // PersonListPanelComponent,
    // PersonInfoPanelComponent,
    // AddressInfoPanelComponent,
    // AddressListPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // FormsModule
  ],
  providers: [PersonService, AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
