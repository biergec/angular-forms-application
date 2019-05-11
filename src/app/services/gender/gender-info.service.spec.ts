import { TestBed } from '@angular/core/testing';

import { GenderInfoService } from './gender-info.service';

describe('GenderInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenderInfoService = TestBed.get(GenderInfoService);
    expect(service).toBeTruthy();
  });
});
