import { TestBed } from '@angular/core/testing';

import { RfqsService } from './rfqs.service';

describe('RfqsService', () => {
  let service: RfqsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RfqsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
