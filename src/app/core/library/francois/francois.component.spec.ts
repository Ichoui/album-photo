import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrancoisComponent } from './francois.component';

describe('FrancoisComponent', () => {
  let component: FrancoisComponent;
  let fixture: ComponentFixture<FrancoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrancoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrancoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
