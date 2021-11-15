import { TestBed } from '@angular/core/testing';

import { ProductAndCategoriesServiceService } from './product-and-categories-service.service';

describe('ProductAndCategoriesServiceService', () => {
  let service: ProductAndCategoriesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAndCategoriesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
