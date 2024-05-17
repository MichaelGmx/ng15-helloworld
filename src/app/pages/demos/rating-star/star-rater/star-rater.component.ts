import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-rater',
  templateUrl: './star-rater.component.html',
  styleUrls: ['./star-rater.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRaterComponent),
      multi: true
    }
  ]
})
export class StarRaterComponent implements ControlValueAccessor {
  public ratings = [
    {
      stars: 1,
      text: 'must GTFO ASAP'
    },
    {
      stars: 2,
      text: 'meh'
    },
    {
      stars: 3,
      text: 'it\'s ok'
    },
    {
      stars: 4,
      text: 'I\'d be sad if  black hole ate it'
    },
    {
      stars: 5,
      text: '10/10 would write review on Taobao'
    },
  ];
  public disabled: boolean;
  public ratingText: string;
  public _value: number;

  displayText = '';


  constructor() { }

  onChanged: any = () => {}
  onTouched: any = () => {}

  writeValue(val: number): void {
    this._value = val;
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setRating(star: any) {
    if (!this.disabled) {
      this._value = star.stars;
      this.ratingText = star.text;
      this.onChanged(star.stars);
      this.onTouched();
    }
  }

}
