import { TestBed, async, inject } from '@angular/core/testing';

import { BanffGuard } from './banff.guard';

describe('BanffGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BanffGuard]
    });
  });

  it('should ...', inject([BanffGuard], (guard: BanffGuard) => {
    expect(guard).toBeTruthy();
  }));
});
