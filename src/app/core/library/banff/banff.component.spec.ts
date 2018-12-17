import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanffComponent } from './banff.component';

describe('BanffComponent', () => {
  let component: BanffComponent;
  let fixture: ComponentFixture<BanffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
