import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllRfqsComponent } from './all-rfqs.component';

describe('AllRfqsComponent', () => {
  let component: AllRfqsComponent;
  let fixture: ComponentFixture<AllRfqsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRfqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRfqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
