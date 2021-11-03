import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStageTrackComponent } from './order-stage-track.component';

describe('OrderStageTrackComponent', () => {
  let component: OrderStageTrackComponent;
  let fixture: ComponentFixture<OrderStageTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderStageTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStageTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
