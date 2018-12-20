import { TestBed, async, inject } from '@angular/core/testing';

import { MapleGuard } from './road.guard';

describe('RoadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapleGuard]
    });
  });

  it('should ...', inject([MapleGuard], (guard: MapleGuard) => {
    expect(guard).toBeTruthy();
  }));
});
