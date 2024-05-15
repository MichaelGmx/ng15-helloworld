import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-ng-zone-demo',
  templateUrl: './ng-zone-demo.component.html',
  styleUrls: ['./ng-zone-demo.component.scss']
})
export class NgZoneDemoComponent {

  progress: number = 0;

  constructor(
    private zone: NgZone
  ) { }

  private increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Current progress: ${this.progress}%`);

    if (this.progress < 100) {
      setTimeout(() => {
        this.increaseProgress(doneCallback);
      }, 10);
    } else {
      doneCallback();
    }
  }

  processWithinAngularZone() {
    this.progress = 0;
    this.increaseProgress(() => console.log('Done!'));
  }

  processOutsideAngularZone() {
    this.progress = 0;
    this.zone.runOutsideAngular(() => {
      this.increaseProgress(() => {
        this.zone.run(() => {
          console.log('Outside Done!');
        });
      });
    });
  }
}
