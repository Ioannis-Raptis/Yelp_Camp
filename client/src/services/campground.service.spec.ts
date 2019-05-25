import { TestBed } from '@angular/core/testing';

import { CampgroundService } from './campground.service';

describe('CampgroundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampgroundService = TestBed.get(CampgroundService);
    expect(service).toBeTruthy();
  });
});
