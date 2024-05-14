import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['../../lifecycle-hook.scss'],
})
export class CounterComponent implements OnChanges {
 
  @Input() counter = 0;
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.counter === 0) {
      this.changeLog = [];
    }

    const chng = changes['counter'];
    const cur = chng.currentValue;
    const prev = JSON.stringify(chng.previousValue);  // first time is {}; after is integer
    this.changeLog.push(`counter: currentValue = ${cur}, previousValue = ${prev}`);
  }

}
