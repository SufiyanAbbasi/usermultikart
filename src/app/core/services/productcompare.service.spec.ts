import { TestBed } from '@angular/core/testing';

import { ProductcompareService } from './productcompare.service';

describe('ProductcompareService', () => {
  let service: ProductcompareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductcompareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
