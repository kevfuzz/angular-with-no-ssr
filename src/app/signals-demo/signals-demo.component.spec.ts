import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalsDemoComponent } from './signals-demo.component';

describe('SignalsDemoComponent', () => {
  let component: SignalsDemoComponent;
  let fixture: ComponentFixture<SignalsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SignalsDemoComponent ] // Updated from declarations to imports for standalone component
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Initial Values', () => {
    it('should have initial counter value of 0', () => {
      expect(component.counter()).toBe(0);
    });

    it('should have initial doubleCounter value of 0', () => {
      expect(component.doubleCounter()).toBe(0);
    });
  });

  describe('Increment Functionality', () => {
    it('should increment counter by 1 when increment() is called', () => {
      component.increment();
      expect(component.counter()).toBe(1);
    });

    it('should update doubleCounter when counter is incremented', () => {
      component.increment(); // counter becomes 1
      expect(component.doubleCounter()).toBe(2);
    });

    it('should handle multiple increments correctly for counter and doubleCounter', () => {
      component.increment(); // counter becomes 1, doubleCounter becomes 2
      component.increment(); // counter becomes 2, doubleCounter becomes 4
      component.increment(); // counter becomes 3, doubleCounter becomes 6
      expect(component.counter()).toBe(3);
      expect(component.doubleCounter()).toBe(6);
    });
  });

  // Effect triggering is implicitly tested by verifying counter and doubleCounter updates.
  // Directly testing console.log is complex and often not done in unit tests.
  // If the effect had other side effects (e.g., updating another signal or a public property),
  // those could be tested here.
});
