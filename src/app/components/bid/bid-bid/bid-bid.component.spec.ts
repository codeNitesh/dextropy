import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidBidComponent } from './bid-bid.component';

describe('BidBidComponent', () => {
  let component: BidBidComponent;
  let fixture: ComponentFixture<BidBidComponent>;

  beforeEach(async(() => {
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
