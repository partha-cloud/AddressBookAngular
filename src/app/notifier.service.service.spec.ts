import { TestBed } from '@angular/core/testing';

import { Notifier.ServiceService } from './notifier.service.service';

describe('Notifier.ServiceService', () => {
  let service: Notifier.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Notifier.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
