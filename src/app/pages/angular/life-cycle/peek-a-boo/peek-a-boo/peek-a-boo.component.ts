import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { LoggerService } from '../../logger.service';
import { PeekABooDirective } from '../peek-a-boo.directive';

@Component({
  selector: 'app-peek-a-boo',
  template: `
    <p>Now you see my hero, {{ name }} </p>
  `
})
export class PeekABooComponent extends PeekABooDirective implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() name = '';

  private verb = 'initialized';

  constructor(logger: LoggerService) {
    super(logger);

    const is = this.name ? 'is' : 'is not';
    this.logIt(`name ${is} known at construction`);  // constructor
  }

  ngOnChanges(changes: SimpleChanges): void {
    const changeMsgs: string[] = [];
    for (const propName in changes) {
      if (propName === 'name') {
        const name = changes['name']['currentValue'];
        changeMsgs.push(`name ${this.verb} to "${name}"`);
      } else {
        changeMsgs.push(propName + ' ' + this.verb);
      }
    }

    this.logIt(`OnChanges: ${changeMsgs.join('; ')}`);
    this.verb = 'changed';
  }

  ngDoCheck(): void {
    this.logIt(`DoCheck`);
  }

  ngAfterContentInit(): void {
    this.logIt(`AfterContentInit`);
  }

  ngAfterContentChecked(): void {
    this.logIt(`AfterContentChecked`);
  }

  ngAfterViewInit(): void {
    this.logIt(`AfterViewInit`);
  }

  ngAfterViewChecked(): void {
    this.logIt(`AfterViewChecked`);
  }

  ngOnDestroy(): void {
    this.logIt(`OnDestory`);
  }

}
