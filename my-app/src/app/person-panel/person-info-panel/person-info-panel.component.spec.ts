import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInfoPanelComponent } from './person-info-panel.component';

describe('InfoPanelComponent', () => {
  let component: PersonInfoPanelComponent;
  let fixture: ComponentFixture<PersonInfoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonInfoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
