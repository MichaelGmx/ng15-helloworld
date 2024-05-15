import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-first-rxjs',
  templateUrl: './first-rxjs.component.html',
  styleUrls: ['../rxjs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstRxjsComponent implements OnInit, OnDestroy {
  

  // document 点击事件的监听
  observable: Observable<number> = fromEvent(document, 'click')
    .pipe(
      debounceTime(1000),
      map((event: MouseEvent) => event.clientX),
    );

  subscription: Subscription;

  ngOnInit(): void {
    // 订阅
    this.subscription = this.observable
      .subscribe(res => {
        console.log(`Click ClientX: ${res}`);
      });
  }

  ngOnDestroy(): void {
    // 组件销毁后，取消订阅
    this.subscription.unsubscribe();
  }

}
