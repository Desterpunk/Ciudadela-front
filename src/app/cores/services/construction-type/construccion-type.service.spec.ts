import { TestBed } from '@angular/core/testing';

import { ConstruccionTypeService } from './construccion-type.service';

describe('ConstruccionTypeService', () => {
  let service: ConstruccionTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstruccionTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
