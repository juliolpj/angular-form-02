import { TestBed, inject } from '@angular/core/testing';

import { InscribirService } from './inscribir.service';

describe('InscribirService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InscribirService]
    });
  });

  it('should be created', inject([InscribirService], (service: InscribirService) => {
    expect(service).toBeTruthy();
  }));
});
