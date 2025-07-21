import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighLowGameComponent } from './high-low-game.component';

describe('HighLowGameComponent', () => {
  let component: HighLowGameComponent;
  let fixture: ComponentFixture<HighLowGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighLowGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighLowGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display default instructions', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('High-Low Equation Game');

    expect(compiled.textContent).toContain('Use the operations to make 1 or 21');
  });

  it('should adjust chips after playing a hand', () => {
    component.bet = 5;
    component.cards = [1, 1, 1];
    component.op1 = '+';
    component.op2 = '-';
    component.evaluate();
    expect(component.chips).not.toBe(100);

  });
});
