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
    expect(compiled.querySelector('p')?.textContent).toContain('Guess the number');
  });
});
