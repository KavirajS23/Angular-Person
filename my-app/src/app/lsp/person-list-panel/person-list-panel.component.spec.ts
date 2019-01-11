import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonListPanelComponent } from './person-list-panel.component';

describe('ListPanelComponent', () => {
  let component: PersonListPanelComponent;
  let fixture: ComponentFixture<PersonListPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonListPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonListPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
