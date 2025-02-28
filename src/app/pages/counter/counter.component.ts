import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  counter = 10;
  cunterSignal = signal(10);

  increaseBy(value: number): void {
    this.counter += value;
    this.cunterSignal.update((prev) => prev + value);
  }

  decreaseBy(value: number): void {
    this.counter -= value;
    this.cunterSignal.update((prev) => prev - value);
  }

  reset(): void {
    this.counter = 10;

    this.cunterSignal.set(0);
  }
}
