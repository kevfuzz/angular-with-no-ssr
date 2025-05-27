import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Singleton service
})
export class SimpleCounterStateService {
  private countSource = new BehaviorSubject<number>(0);
  
  // Observable stream for components to subscribe to
  public readonly count$: Observable<number> = this.countSource.asObservable();

  constructor() { }

  increment() {
    this.countSource.next(this.countSource.value + 1);
  }

  decrement() {
    this.countSource.next(this.countSource.value - 1);
  }

  reset() {
    this.countSource.next(0);
  }

  // Optional: A way to get the current value synchronously if needed, though not always recommended
  // public getCurrentCount(): number {
  //   return this.countSource.value;
  // }
}
