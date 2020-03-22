import { TestBed } from '@angular/core/testing';

import { PatientStateService } from './patient-state.service';

describe('PatientStateService', () => {
  let service: PatientStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
