import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidRespondComponent } from './bid-respond.component';

describe('BidRespondComponent', () => {
  let component: BidRespondComponent;
  let fixture: ComponentFixture<BidRespondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidRespondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidRespondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
