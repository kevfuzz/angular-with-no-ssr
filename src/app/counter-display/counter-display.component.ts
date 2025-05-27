import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For AsyncPipe
import { Observable } from 'rxjs';
import { SimpleCounterStateService } from '../services/simple-counter-state.service'; // Adjust path

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [CommonModule],
  template: `<h3>Counter Display: {{ '{' }}{{ count$ | async }}</h3>`
})
export class CounterDisplayComponent {
  count$: Observable<number>;
  constructor(private counterState: SimpleCounterStateService) {
    this.count$ = this.counterState.count$;
  }
}
