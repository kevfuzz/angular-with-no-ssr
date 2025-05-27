import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterDisplayComponent } from './counter-display.component';
import { CommonModule } from '@angular/common'; // CommonModule for AsyncPipe
// import { SimpleCounterStateService } from '../services/simple-counter-state.service';

describe('CounterDisplayComponent', () => {
  let component: CounterDisplayComponent;
  let fixture: ComponentFixture<CounterDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CounterDisplayComponent, CommonModule ], // Standalone component, CommonModule for AsyncPipe
      // providers: [SimpleCounterStateService] // Provide if service interactions are tested
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
