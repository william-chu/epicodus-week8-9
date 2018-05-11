import { TestBed, inject } from '@angular/core/testing';

import { JeanFitService } from './jean-fit.service';

describe('JeanFitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JeanFitService]
    });
  });

  it('should be created', inject([JeanFitService], (service: JeanFitService) => {
    expect(service).toBeTruthy();
  }));
});
