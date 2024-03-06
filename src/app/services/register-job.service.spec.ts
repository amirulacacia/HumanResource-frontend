import { TestBed } from '@angular/core/testing';

import { RegisterJobService } from './register-job.service';

describe('RegisterJobService', () => {
  let service: RegisterJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
