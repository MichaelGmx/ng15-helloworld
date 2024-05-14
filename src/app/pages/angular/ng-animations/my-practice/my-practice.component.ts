import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-my-practice',
  templateUrl: './my-practice.component.html',
  styleUrls: ['./my-practice.component.scss'],
  animations: [
    trigger('doneAnimate', [
      // ...
      transition(':enter', [
        style({                      // 初始状态
          opacity: 0,
          transform: 'scale(3)',
          filter: 'blur(2px)',
        }),
        // animate('300ms ease-in',
        animate('300ms cubic-bezier(.17, .67, .88, .1)',
          style({
            opacity: 1,
            transform: 'scale(1)',
            filter: 'blur(0)',
          }),
        ),
      ]),
      transition(':leave', [
        animate('100ms ease-out',
          style({
            opacity: 0,
            transform: 'scale(3)',
            filter: 'blur(2px)',
          }),
        ),
      ]),
    ]),
  ],
})
export class MyPracticeComponent implements AfterViewInit {
  @ViewChild('animateBlockEl') animateBlockEl: ElementRef;

  isShown = false;

  toggle() {
    this.isShown = !this.isShown;
  }

  ngAfterViewInit(): void {
    window.dispatchEvent(new Event('resize'));
  }
}
