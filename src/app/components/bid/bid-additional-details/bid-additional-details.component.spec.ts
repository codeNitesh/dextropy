import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidAdditionalDetailsComponent } from './bid-additional-details.component';

describe('BidAdditionalDetailsComponent', () => {
  let component: BidAdditionalDetailsComponent;
  let fixture: ComponentFixture<BidAdditionalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidAdditionalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidAdditionalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
