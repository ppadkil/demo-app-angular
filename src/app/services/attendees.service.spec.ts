import { TestBed } from '@angular/core/testing';

import { AttendeesService } from './attendees.service';

describe('AttendeesService', () => {
  let service: AttendeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
