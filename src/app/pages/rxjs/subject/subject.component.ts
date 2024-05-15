import { ChangeDetectionStrategy, Component } from '@angular/core';
import { from, interval, Subject, ConnectableObservable, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { take, tap, mapTo, multicast, refCount, publish } from 'rxjs/operators';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['../rxjs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectComponent {

  constructor() { }

  // Subject 作为 Observable，可以多次传播
  firstFn(): void {
    const subject = new Subject();

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });
    subject.subscribe({
      next: (v) => console.log('observerB: ' + v)
    });

    // 多次传播
    subject.next(1);
    subject.next(2);
  }


  // Subject 作为 Observer，可以多次接收
  secondFn(): void {
    const subject = new Subject();

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });
    subject.subscribe({
      next: (v) => console.log('observerB: ' + v)
    });

    subject.next(5);

    const observable = from([1, 2, 3]);
    observable.subscribe(subject);   // Subject作为Observer，多次接收
  }


  // 多播Observable
  //   使用 multicast 操作符，创建出 ConnectableObservable
  //   再使用connect()方法 启动共享的Observable执行
  //
  // - v7版本提示：multicast、ConnectableObservable 将在v8弃用
  thirdFn(): void {
    const source = from([1, 2, 3]);
    const subject = new Subject();
    const multicasted = source.pipe(multicast(subject)) as ConnectableObservable<number>;
    
    multicasted.subscribe({
      next: val => console.log('observerA val: ' + val)
    });
    multicasted.subscribe({
      next: val => console.log('observerB val: ' + val)
    });

    multicasted.connect();  // 启动共享的Observable执行
    // 结果：
    //   observerA val: 1
    //   observerB val: 1
    //   observerA val: 2
    //   observerB val: 2
    //   observerA val: 3
    //   observerB val: 3

    /*** 比较各自建立 输出的结果
    const source = from([1, 2, 3]);
    source.subscribe({
      next: val => console.log('observerA val: ' + val)
    });
    source.subscribe({
      next: val => console.log('observerB val: ' + val)
    });
    // 结果：
    //   observerA val: 1
    //   observerA val: 2
    //   observerA val: 3
    //   observerB val: 1
    //   observerB val: 2
    //   observerB val: 3
    ****/
  }


  // ConnectableObservable 的 refCount方法
  //   使用 refCount方法，在第一个Observer订阅时启动（不用手动connect()），并在最后一个Observer取消订阅后，停止执行
  //   refCount()方法 返回的是 普通的Observable，不是ConnectableObservable
  // 
  // refCount 同时也可以是pipe操作符
  // eg.  const refCounted = source.pipe(multicast(new Subject()), refCount());
  // 使用publish操作符，还可以简化为：
  // eg.  const refCounted = source.pipe(publish(), refCount());
  // 
  fourthFn(): void {
    const source = interval(500);
    const multi = source.pipe(multicast(new Subject())) as ConnectableObservable<number>;

    let subscriber1, subscriber2;

    console.log('observerA subscribed');
    subscriber1 = multi.refCount().subscribe({
      next: val => console.log('observerA val: ' + val)
    });

    setTimeout(() => {
      console.log('observerB subscribed');
      subscriber2 = multi.refCount().subscribe({
        next: val => console.log('observerB val: ' + val)
      });
    }, 600);
    
    setTimeout(() => {
      console.log('observerA unsubscribe');
      subscriber1.unsubscribe();
    }, 1200);

    setTimeout(() => {
      console.log('observerB unsubscribe');
      subscriber2.unsubscribe();
    }, 2000);
    // 结果：
    //   observerA subscribed
    //   observerA val: 0
    //   observerB subscribed
    //   observerA val: 1
    //   observerB val: 1
    //   observerA unsubscribe
    //   observerB val: 2
    //   observerB val: 3
    //   observerB unsubscribe
  }

  // 使用publish、refCount操作符，简化写法
  fourthPlusFn(): void {
    const source = interval(500);
    const multi = source.pipe(publish(), refCount());

    let subscriber1, subscriber2;

    console.log('observerA subscribed');
    subscriber1 = multi.subscribe({
      next: val => console.log('observerA val: ' + val)
    });

    setTimeout(() => {
      console.log('observerB subscribed');
      subscriber2 = multi.subscribe({
        next: val => console.log('observerB val: ' + val)
      });
    }, 600);
    
    setTimeout(() => {
      console.log('observerA unsubscribe');
      subscriber1.unsubscribe();
    }, 1200);

    setTimeout(() => {
      console.log('observerB unsubscribe');
      subscriber2.unsubscribe();
    }, 2000);
    // 结果：
    //   observerA subscribed
    //   observerA val: 0
    //   observerB subscribed
    //   observerA val: 1
    //   observerB val: 1
    //   observerA unsubscribe
    //   observerB val: 2
    //   observerB val: 3
    //   observerB unsubscribe
  }


  // BehaviorSubject，适合 根据时间变化的值
  //    当前值，发送最新值 给订阅者
  fivethFn(): void {
    const subject = new BehaviorSubject(0);  // 初始值 0

    subject.subscribe({
      next: val => console.log('observerA val: ' + val)
    });

    subject.next(1);
    subject.next(2);

    subject.subscribe({
      next: val => console.log('observerB val: ' + val)
    });

    subject.next(3);
    // 结果：
    //   observerA val: 0
    //   observerA val: 1
    //   observerA val: 2
    //   observerB val: 2    // observerB订阅时，值已变成2，可以接收到
    //   observerA val: 3
    //   observerB val: 3
  }


  // ReplaySubject，适合 保存路由缓存
  //    缓存指定条件的值，发送给订阅者
  //    第一个参数 个数
  //    第二个参数 时间(单位：ms)
  sixthFn(): void {
    const subject = new ReplaySubject(3);   // 缓存 3 个值

    subject.subscribe({
      next: val => console.log('observerA val: ' + val)
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: val => console.log('observerB val: ' + val)
    });

    subject.next(5);
    // 结果：
    //   observerA val: 1
    //   observerA val: 2
    //   observerA val: 3
    //   observerA val: 4    // observerA订阅后 next的值都可以拿到
    //   observerB val: 2    // observerB 只可以拿到订阅前的 3 个值，之后的都可以
    //   observerB val: 3
    //   observerB val: 4
    //   observerA val: 5
    //   observerB val: 5
  }


  // AsyncSubject，适合 
  //    将complete()后的最后一个值，发送给订阅者
  seventhFn(): void {
    const subject = new AsyncSubject();

    subject.subscribe({
      next: val => console.log('observerA val: ' + val)
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: val => console.log('observerB val: ' + val)
    });

    subject.next(5);
    subject.complete();
    // 结果：
    //   observerA val: 5
    //   observerB val: 5

    // 获取不到，complete后 彻底结束
    subject.next(6);
    subject.complete();
  }

}
