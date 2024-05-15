import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterComponent),
      multi: true
    }
  ]
})
export class CounterComponent implements ControlValueAccessor {

  _count: number = 0;

  get count() {
    return this._count;
  }
  set count(value: number) {
    this._count = value;
    this.propagateOnChange(this._count);
  }

  propagateOnChange: (value: any) => void = (_: any) => {};
  propagateOnTouched: (value: any) => void = (_: any) => {};

  writeValue(value: any): void {
    if (value) {
      this.count = value;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateOnChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateOnTouched = fn;
  }

  // 可选设置
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

}
