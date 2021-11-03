import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BidAdditionalDetailsComponent } from './bid-additional-details.component';

describe('BidAdditionalDetailsComponent', () => {
  let component: BidAdditionalDetailsComponent;
  let fixture: ComponentFixture<BidAdditionalDetailsComponent>;

  beforeEach(waitForAsync(() => {
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
