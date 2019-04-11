import { TestBed } from '@angular/core/testing';

import { PessoasManagerService } from './pessoas-manager.service';

describe('PessoasManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PessoasManagerService = TestBed.get(PessoasManagerService);
    expect(service).toBeTruthy();
  });
});
