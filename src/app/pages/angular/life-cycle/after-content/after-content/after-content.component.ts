import { AfterContentChecked, AfterContentInit, Component, ContentChild } from '@angular/core';
import { LoggerService } from '../../logger.service';
import { ChildContentComponent } from '../child-content/child-content.component';

@Component({
  selector: 'app-after-content',
  templateUrl: './after-content.component.html',
  styleUrls: ['../../lifecycle-hook.scss'],
})
export class AfterContentComponent implements AfterContentInit, AfterContentChecked {
  comment = '';
  private prevHero = '';

  @ContentChild(ChildContentComponent) childContent!: ChildContentComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterContent constructor');
  }

  ngAfterContentInit(): void {
    // contentChild is set after the content has been initialized
    this.logIt('AfterContentInit');
    this.doSomething();
  }

  ngAfterContentChecked(): void {
    // contentChild is updated after the content has been checked
    if (this.prevHero === this.childContent.hero) {
      this.logIt('AfterContentChecked (no change)');
    } else {
      this.prevHero = this.childContent.hero;
      this.logIt('AfterContentChecked');
      this.doSomething();
    }
  }

  doSomething() {
    // AfterContent在视图更新前，可以修改宿主视图，此处不需要延迟更新视图
    this.comment = this.childContent.hero.length > 10 ? `That's a long name` : '';
  }
  
  private logIt(method: string) {
    const child = this.childContent;
    const message = `${method}: ${child ? child.hero : 'no'} ChildContent`;
    this.logger.log(message);
  }

}
