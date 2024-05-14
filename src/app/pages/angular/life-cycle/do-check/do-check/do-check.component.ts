import { Component, DoCheck, Input } from '@angular/core';
import { Hero } from '../../hero';

@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
  styleUrls: ['../../lifecycle-hook.scss'],
})
export class DoCheckComponent implements DoCheck {
  @Input() hero!: Hero;
  @Input() power = '';

  changeDetected = false;
  changeLog: string[] = [];
  prevHeroName = '';
  prevPower = '';
  prevLogLength = 0;
  noChangeCount = 0;

  ngDoCheck(): void {
    if (this.hero.name !== this.prevHeroName) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Hero name changed to "${this.hero.name}" from "${this.prevHeroName}"`);
      this.prevHeroName = this.hero.name;
    }

    if (this.power !== this.prevPower) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Power changed to "${this.power}" from "${this.prevPower}"`);
      this.prevPower = this.power;
    }

    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      // log that hook was called when there was no relevant change.
      const count = this.noChangeCount += 1;
      const noChangeMsg = `DoCheck called ${count}x when no change to hero or power`;
      if (count === 1) {
        // add new "no change" message
        this.changeLog.push(noChangeMsg);
      } else {
        // update last "no change" message
        this.changeLog[this.changeLog.length - 1] = noChangeMsg;
      }
    }

    this.changeDetected = false;
  }

  reset() {
    this.changeDetected = true;
    this.changeLog = [];
  }

}
