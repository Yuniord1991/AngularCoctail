import { TestBed } from '@angular/core/testing';

import { RandomTeamService } from './random-team.service';

describe('RandomTeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomTeamService = TestBed.get(RandomTeamService);
    expect(service).toBeTruthy();
  });
});
