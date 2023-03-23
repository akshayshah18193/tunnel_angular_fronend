import { TestBed } from '@angular/core/testing';

import { GetHashtagService } from './get-hashtag.service';

describe('GetHashtagService', () => {
  let service: GetHashtagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHashtagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
