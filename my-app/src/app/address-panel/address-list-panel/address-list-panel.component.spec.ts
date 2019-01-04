import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressListPanelComponent } from './address-list-panel.component';

describe('AddressListPanelComponent', () => {
  let component: AddressListPanelComponent;
  let fixture: ComponentFixture<AddressListPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressListPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressListPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
