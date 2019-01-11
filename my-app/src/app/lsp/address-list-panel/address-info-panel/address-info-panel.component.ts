import { Component, OnInit, Input, DoCheck, OnDestroy, OnChanges } from '@angular/core';
import { AddressModel } from '../../address.model';
import { SelectorService } from '../../selector.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddressService } from 'src/app/address.service';

@Component({
  selector: 'app-address-info-panel',
  templateUrl: './address-info-panel.component.html',
  styleUrls: ['./address-info-panel.component.css']
})
export class AddressInfoPanelComponent implements OnInit, OnDestroy {

  addressObj = new AddressModel();
  paramsSubscription: Subscription;
  selectedListItemId: number;
  @Input() selectedListItem: AddressModel;
  constructor(private route: ActivatedRoute,
              private addressService: AddressService) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.selectedListItemId = params['id'];
          if (this.selectedListItemId) {
            this.onSelectListItem(this.selectedListItemId);
          } else {
            this.addressObj = new AddressModel();
          }
        }
      );
  }

  onSelectListItem(id: number) {
    this.addressService.get(id)
      .subscribe(
        (response) => {
          this.addressObj = response;
        }
      );
  }

  onSubmit() {
    this.addressService.create(this.addressObj)
      .subscribe(
        (response: AddressModel) => {
          this.addressService.submitedAddress.next(response);
        }
      );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
