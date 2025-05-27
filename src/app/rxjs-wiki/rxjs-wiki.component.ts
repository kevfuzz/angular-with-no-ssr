import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject, Subscription, of, interval } from 'rxjs';
import { map, filter, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-wiki',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-wiki.component.html',
  styleUrls: ['./rxjs-wiki.component.scss']
})
export class RxjsWikiComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  // Example properties for template binding or direct use
  observableOutput: string[] = [];
  operatorOutput: string[] = [];
  subjectOutput: string[] = [];
  behaviorSubjectOutput1: string[] = [];
  behaviorSubjectOutput2: string[] = [];
  currentTime$: Observable<string>; // For AsyncPipe example

  constructor() {
    // Initialize currentTime$ here or in ngOnInit
    this.currentTime$ = new Observable(observer => {
      const intervalId = setInterval(() => {
        observer.next(new Date().toLocaleTimeString());
      }, 1000);
      // Cleanup function for when the observable is unsubscribed
      return () => {
        clearInterval(intervalId);
        console.log('currentTime$ observable teardown.'); // For verification
      };
    });
  }

  ngOnInit(): void {
    this.runObservableExample();
    this.runOperatorExample();
    this.runSubjectExamples();
    // currentTime$ is already initialized and AsyncPipe will manage its subscription.
  }

  runObservableExample() {
    const myObservable = new Observable(observer => {
      observer.next(1);
      this.observableOutput.push('Observable emitted: 1');
      observer.next(2);
      this.observableOutput.push('Observable emitted: 2');
      observer.next('Hello');
      this.observableOutput.push('Observable emitted: Hello');
      setTimeout(() => {
        observer.next(3);
        this.observableOutput.push('Observable emitted: 3 (after timeout)');
        observer.complete();
        this.observableOutput.push('Observable completed');
      }, 1000);

      // Cleanup function for when the observable is unsubscribed or completes
      return () => {
        this.observableOutput.push('Observable teardown logic executed.');
      };
    });

    const observer = {
      next: (x: any) => this.observableOutput.push(`Observer got value: ${x}`),
      error: (err: any) => this.observableOutput.push(`Observer got error: ${err.message}`),
      complete: () => this.observableOutput.push('Observer got complete notification'),
    };

    const sub = myObservable.subscribe(observer);
    this.subscriptions.add(sub); // Add to main subscription for easy unsubscribe
  }

  runOperatorExample() {
    const source$ = of(1, 2, 3, 4, 5); // Creation operator: of

    const sub = source$.pipe(
      tap(value => this.operatorOutput.push(`Original value: ${value}`)), // Utility operator: tap
      filter(x => x % 2 === 0),      // Filtering operator: filter
      tap(value => this.operatorOutput.push(`After filter (even): ${value}`)),
      map(x => x * 10),              // Transformation operator: map
      tap(value => this.operatorOutput.push(`After map (*10): ${value}`)),
      take(2)                        // Filtering operator: take first 2
    ).subscribe(x => {
      this.operatorOutput.push(`Operator example final value: ${x}`);
    });
    this.subscriptions.add(sub);
  }

  runSubjectExamples() {
    // BehaviorSubject Example
    const behaviorSub = new BehaviorSubject('Initial Behavior Value');
    this.subscriptions.add(
      behaviorSub.subscribe(value => {
        this.behaviorSubjectOutput1.push(`BehaviorSub A: ${value}`);
      })
    );
    behaviorSub.next('New Behavior Value 1');
    this.subscriptions.add(
      behaviorSub.subscribe(value => {
        this.behaviorSubjectOutput2.push(`BehaviorSub B: ${value}`); // Gets "New Behavior Value 1"
      })
    );
    behaviorSub.next('New Behavior Value 2');
    this.behaviorSubjectOutput1.push('--- BehaviorSub A complete ---');
    this.behaviorSubjectOutput2.push('--- BehaviorSub B complete ---');


    // Simple Subject Example
    const simpleSub = new Subject<number>();
    this.subscriptions.add(
        simpleSub.subscribe(v => this.subjectOutput.push(`Simple Subject: ${v}`))
    );
    simpleSub.next(100);
    simpleSub.next(200);
    this.subjectOutput.push('--- Simple Subject complete ---');

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe(); // Clean up all subscriptions
    console.log('RxjsWikiComponent destroyed, subscriptions cleaned up.');
  }
}
