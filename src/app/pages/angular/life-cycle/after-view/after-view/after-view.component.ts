import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { LoggerService } from '../../logger.service';
import { ChildViewComponent } from '../child-view/child-view.component';

@Component({
  selector: 'app-after-view',
  templateUrl: './after-view.component.html',
  styleUrls: ['../../lifecycle-hook.scss'],
})
export class AfterViewComponent implements AfterViewInit, AfterViewChecked {
  comment = '';
  private prevHero = '';

  @ViewChild(ChildViewComponent) childView!: ChildViewComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterView constructor');
  }

  ngAfterViewInit(): void {
    // ChildView is set after the view has been initialized
    this.logIt('AfterViewInit');
    this.doSomething();
  }

  ngAfterViewChecked(): void {
    // ChildView is updated after the view has been checked
    if (this.prevHero === this.childView.hero) {
      this.logIt('AfterViewChecked (no change)');
    } else {
      this.prevHero = this.childView.hero;
      this.logIt('AfterViewChecked');
      this.doSomething();
    }
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    const c = this.childView.hero.length > 10 ? `That's long name` : '';
    if (c !== this.comment) {
      // Wait a tick because the component's view has already been checked
      // 使用setTimeout将日志的更新放到js工作周期的最后
      this.logger.tick_then(() => this.comment = c);
    }
  }

  private logIt(method: string) {
    const child = this.childView;
    const message = `${method}: ${child ? child.hero : 'no'} ChildView`;
    this.logger.log(message);
  }

}
