import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanResult } from './loan-result';

describe('LoanResult', () => {
  let component: LoanResult;
  let fixture: ComponentFixture<LoanResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanResult],
    }).compileComponents();

    fixture = TestBed.createComponent(LoanResult);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
