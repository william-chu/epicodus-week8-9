import { TestBed, inject } from '@angular/core/testing';

import { KeyLookService } from './key-look.service';

describe('KeyLookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeyLookService]
    });
  });

  it('should be created', inject([KeyLookService], (service: KeyLookService) => {
    expect(service).toBeTruthy();
  }));
});
