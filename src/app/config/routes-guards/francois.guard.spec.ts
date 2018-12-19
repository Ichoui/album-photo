import { TestBed, async, inject } from '@angular/core/testing';

import { FrancoisGuard } from './francois.guard';

describe('FrancoisGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrancoisGuard]
    });
  });

  it('should ...', inject([FrancoisGuard], (guard: FrancoisGuard) => {
    expect(guard).toBeTruthy();
  }));
});
