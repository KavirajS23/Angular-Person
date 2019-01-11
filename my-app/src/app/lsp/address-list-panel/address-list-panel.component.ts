import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SelectorService } from '../selector.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AddressService } from 'src/app/address.service';
import { AddressModel } from '../address.model';

@Component({
  selector: 'app-address-list-panel',
  templateUrl: './address-list-panel.component.html',
  styleUrls: ['./address-list-panel.component.css']
})
export class AddressListPanelComponent implements OnInit {

  entityMetaData: string[] = ['ID', 'Street', 'City', 'Postal Code', 'Delete?'];
  entityActualData: AddressModel[];
  newAddress = new AddressModel();
  constructor(private router: Router,
              private route: ActivatedRoute,
              private addressService: AddressService) { }

  ngOnInit() {
    this.getAddressList();
    this.addressService.submitedAddress
      .subscribe(
        (response) => {
          this.newAddress = <AddressModel>response;
          console.log(this.newAddress.id);
          this.getAddressList();
        }
      );
  }

  getAddressList() {
    this.addressService.getList()
      .subscribe(data => {
        this.entityActualData = <AddressModel[]>data;
        if (this.newAddress) {
          this.router.navigate([this.newAddress.id], {relativeTo: this.route});
        } else {
          this.router.navigate([this.entityActualData[0].id], {relativeTo: this.route});
        }

    });
  }
}
