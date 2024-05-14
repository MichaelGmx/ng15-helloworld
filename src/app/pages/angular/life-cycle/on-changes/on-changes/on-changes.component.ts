import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Hero } from '../../hero';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['../../lifecycle-hook.scss'],
})
export class OnChangesComponent implements OnChanges {
  @Input() hero!: Hero;
  @Input() power = '';

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      const isFirst = chng.firstChange;
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}, isFirstChange: ${isFirst}`);
    }
  }

  reset() {
    this.changeLog = [];
  }

}
