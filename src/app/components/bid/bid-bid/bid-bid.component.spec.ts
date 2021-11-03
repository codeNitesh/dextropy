import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BidBidComponent } from './bid-bid.component';

describe('BidBidComponent', () => {
  let component: BidBidComponent;
  let fixture: ComponentFixture<BidBidComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BidBidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
