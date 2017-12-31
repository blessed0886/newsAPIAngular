import { TestBed, inject } from '@angular/core/testing';

import { GetNewsHeadlineService } from './get-news-headline.service';

describe('GetNewsHeadlineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetNewsHeadlineService]
    });
  });

  it('should be created', inject([GetNewsHeadlineService], (service: GetNewsHeadlineService) => {
    expect(service).toBeTruthy();
  }));
});
