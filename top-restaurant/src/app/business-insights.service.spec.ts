import { TestBed, inject } from '@angular/core/testing';

import { BusinessInsightsService } from './business-insights.service';

describe('BusinessInsightsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessInsightsService]
    });
  });

  it('should be created', inject([BusinessInsightsService], (service: BusinessInsightsService) => {
    expect(service).toBeTruthy();
  }));
});
