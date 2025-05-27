import { Component } from '@angular/core';
import { SimpleCounterStateService } from '../services/simple-counter-state.service'; // Adjust path

@Component({
  selector: 'app-counter-controls',
  standalone: true,
  imports: [],
  template: `
    <div>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
      <button (click)="reset()">Reset</button>
    </div>
  `
})
export class CounterControlsComponent {
  constructor(private counterState: SimpleCounterStateService) { }
  increment() { this.counterState.increment(); }
  decrement() { this.counterState.decrement(); }
  reset() { this.counterState.reset(); }
}
