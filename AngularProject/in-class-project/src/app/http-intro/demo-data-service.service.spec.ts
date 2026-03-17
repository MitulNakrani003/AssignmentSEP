import { TestBed } from '@angular/core/testing';

import { DemoDataServiceService } from './demo-data-service.service';

describe('DemoDataServiceService', () => {
  let service: DemoDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
