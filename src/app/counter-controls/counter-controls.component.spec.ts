import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterControlsComponent } from './counter-controls.component';
// SimpleCounterStateService would be needed if we test functionality, but for 'should create' it's not.
// import { SimpleCounterStateService } from '../services/simple-counter-state.service';

describe('CounterControlsComponent', () => {
  let component: CounterControlsComponent;
  let fixture: ComponentFixture<CounterControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CounterControlsComponent ], // Standalone component
      // providers: [SimpleCounterStateService] // Provide if service interactions are tested
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
