import { Component } from '@angular/core';
import { timer } from "rxjs";
import { map, share } from "rxjs/operators";


@Component({
  selector: 'clock',
  template: `
  <div>{{ rxTime | date: 'hh:mm a' }}</div>
  <div class="fs-6 fw-light">{{ rxDate | date }}</div>
`
})


export class ClockComponent {
  rxTime = new Date();
  rxDate = new Date();
  intervalId;
  subscription;

  ngOnInit() {
    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}