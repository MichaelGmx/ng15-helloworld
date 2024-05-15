import { ChangeDetectionStrategy, Component } from '@angular/core';

import { from, interval, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['../rxjs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservableComponent {

  observable: Observable<number> = interval(1000);
  subscription: Subscription;

  constructor() { }

  // 第一个示例
  firstFn(): void {
    const observable = new Observable(subscribe => {
      subscribe.next(1);
      subscribe.next(2);
      subscribe.next(3);
    });
    console.log('--- before subscribe ---');
    observable.subscribe(observer => {
      console.log('获得 value: ' + observer);
    });
    console.log('--- after subscribe ---');
  }


  // 执行顺序
  secondFn(): void {
    const foo = new Observable(subscribe => {
      console.log('--- Begin subscribe ---');
      subscribe.next(1);
      subscribe.next(2);
      subscribe.next(3);
      setTimeout(() => {
        subscribe.next(4);
      }, 1000);
    });

    console.log('--- before subscribe ---');
    foo.subscribe(observer => {
      console.log('获得 value: ' + observer);
    });
    console.log('--- after subscribe ---');
  }


  // 创建Observable
  thridFn(): void {
    // 如下两种方式相同
    // 一般使用 创建操作符of 推出简单值更方便
    const observable1 = new Observable(subscribe => {
      subscribe.next([1, 2, 3]);
    }).subscribe(observer => {
      console.log('new Observable创建 输出：', observer);
    });

    of([1, 2, 3]).subscribe(observer => {
      console.log('of创建 输出：', observer);
    });

    console.log('------ 分隔符 ------');


    // from 转换
    const observable2 = new Observable(subscribe => {
      subscribe.next(1);
      subscribe.next(2);
      subscribe.next(3);
    }).subscribe(observer => {
      console.log('new Observable创建 输出：', observer);
    });
    from([1, 2, 3]).subscribe(observer => {
      console.log('from创建 输出：', observer);
    });
  }


  // Observer(观察者)的 完整调用
  fourthFn(): void {
    const observable = new Observable(subscribe => {
      subscribe.next(1);
      subscribe.next(2);
      subscribe.next(3);

      // // 报错 退出
      // subscribe.error(new Error('Custom Error'));

      // 结束
      subscribe.complete();

      subscribe.next(4);     // 这条记录 不会被接收到
    });

    // 订阅时，可以只提供回调函数
    // observable.subscribe(res => {
    //   console.log('输出：', res);
    // }, err => {
    //   console.log('错误：', err);
    // }, () => {
    //   console.log('结束');
    // });

    // 也可以是 Observer对象
    const observer = {
      next: res => {
        console.log('输出：', res);
      },
      error: err => {
        console.log('错误：', err);
      },
      complete: () => {
        console.log('结束');
      }
    };
    observable.subscribe(observer);
  }


  start() {
    // subscription 是 Observable的执行，有方法 unsubscribe 取消订阅
    this.subscription = this.observable.subscribe(res => {   // observable 是 interval(1000)
      console.log(res);
    });
  }

  cancel() {
    this.subscription.unsubscribe();
  }


  // 合并subscription
  subscriptionMulti() {
    const observable1 = interval(400);
    const subscription1 = observable1.subscribe(observer => {
      console.log('first: ', observer);
    });

    const observable2 = interval(300);
    const subscription2 = observable2.subscribe(observer => {
      console.log('second: ', observer);
    });

    // 合并subscription，一起取消订阅
    subscription1.add(subscription2);
    setTimeout(() => {
      subscription1.unsubscribe();
    }, 1000);
  }

}

