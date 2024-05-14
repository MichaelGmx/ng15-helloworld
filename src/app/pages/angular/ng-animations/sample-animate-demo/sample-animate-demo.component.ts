import { AfterViewInit, Component } from '@angular/core';

import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sample-animate-demo',
  templateUrl: './sample-animate-demo.component.html',
  styleUrls: ['./sample-animate-demo.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class SampleAnimateDemoComponent implements AfterViewInit {

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngAfterViewInit(): void {
    window.dispatchEvent(new Event('resize'));
  }
}
