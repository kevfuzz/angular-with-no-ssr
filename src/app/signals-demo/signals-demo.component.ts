import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signals-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals-demo.component.html',
  styleUrls: ['./signals-demo.component.scss']
})
export class SignalsDemoComponent {
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    effect(() => {
      console.log(`Counter value: ${this.counter()}`);
    });
  }

  increment() {
    this.counter.set(this.counter() + 1);
  }
}
