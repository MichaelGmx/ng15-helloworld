import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of, interval, merge, forkJoin, from, zip, concat, race, fromEvent, timer } from 'rxjs';
import { first, last, map, mapTo, skip, take, delay, share, pluck, distinctUntilChanged, switchMap, mergeMap, scan, reduce, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['../rxjs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperatorsComponent {

  constructor() { }

  // take
  //    仅获取前5个
  takeFn(): void {
    from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      .pipe(
        take(5)
      ).subscribe({
        next: val => console.log('val: ' + val)
      });
  }

  // first
  firstFn(): void {
    from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      .pipe(
        first()
      ).subscribe({
        next: val => console.log('val: ' + val)
      });
  }

  // last
  //    类似AsyncSubject，需要等到subject.complete()结束，才发送最后一个值给订阅者
  lastFn(): void {
    from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      .pipe(
        last()
      ).subscribe({
        next: val => console.log('val: ' + val)
      });
  }

  // skip
  //    跳过前8个
  skipFn(): void {
    from(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'])
      .pipe(
        skip(8)
      ).subscribe({
        next: val => console.log('val: ' + val)
      });
  }



  // map
  mapFn(): void {
    from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      .pipe(
        map((val: number) => val * 10)
      ).subscribe({
        next: val => console.log('val: ' + val)
      });
  }

  // pluck
  //    提取属性
  //    - v8 将弃用, 可使用map替换
  pluckFn(): void {
    from([{ name: 'Joe', age: 28 }, { name: 'Michael', age: 30 }, { name: 'Nole', age: 22 }])
      .pipe(
        pluck('name')
      ).subscribe({
        next: val => console.log('val: ' + val)
      });
    // 结果：
    //   val: Joe
    //   val: Michael
    //   val: Nole
  }

  // distinctUntilChanged
  //    与上一次值不同才输出
  distinctUntilChangedFn(): void {
    from([1, 1, 2, 2, 3, 1, 2, 3])
      .pipe(
        distinctUntilChanged()
      ).subscribe({
        next: val => console.log('val: ' + val)
      });
    // 结果：
    //   val: 1
    //   val: 2
    //   val: 3
    //   val: 1
    //   val: 2
    //   val: 3
  }

  // 参考：Rxjs map, mergeMap 和 switchMap 的区别和联系
  // https://segmentfault.com/a/1190000041879117

  // mergeMap
  //    连接两个Observable，后一个使用前一个的结果(相当于Flat打平)
  mergeMapFn(): void {
    const source = from(['Hello', 'Hi', 'Bonjour']).pipe(delay(2000));
    function nestSource(val: string) {
      return of(`${val} World`).pipe(delay(1000));
    }
    source.pipe(
      mergeMap(val => nestSource(val))
    ).subscribe(res => {
      console.log(res);
    });
    // 结果(3秒后一同输出)：
    //    Hello World
    //    Hi World
    //    Bonjour World


    // 作为比较，若使用switchMap，仅输出最后一个最新值
    source.pipe(
      switchMap(val => nestSource(val))
    ).subscribe(res => {
      console.log(res);
    });
    // 结果(3秒后 仅输出最新值)：
    //    Bonjour World
  }

  // switchMap
  //    订阅发出值非常频繁，且仅需最新值时，可以使用switchMap
  //    作用：转换Observable，当进入新的时，取消前一次的订阅输出
  switchMapFn(): void {
    console.log('提示：点击任意位置，等待1秒后，会在console输出');
    console.log('多次点击，会取消前一次的订阅');

    const source = fromEvent(document, 'click');
    source.pipe(
      switchMap(() => timer(1000).pipe(mapTo('测试文字')))
    ).subscribe(val => {
      console.log(val);
    });

    /*
      - 上面的逻辑可以使用 debounceTime 简化如下：
      source.pipe(
        mapTo('测试文字'),
        debounceTime(1000)
      ).subscribe(val => {
        console.log(val);
      });
    */

    // 结果：
    //    [点击1次，等待1秒]
    //    测试文字            // 点击后，等待1秒显示出来
    //    [不间断多次点击，直到停止后，等待1秒]
    //    测试文字            // 若多次点击，在1秒内都会被取消，直到停止后过1秒，才显示
  }

  

  // reduce
  //    递归，输出最终结果
  reduceFn(): void {
    const source = of(1, 2, 3);
    source.pipe(
      reduce((acc, cur) => acc + cur, 0)
    ).subscribe(val => {
      console.log('val: ' + val)
    });
    // 结果：
    //   val: 6
  }

  // scan
  //    递归，输出每次的结果
  scanFn(): void {
    const source = of(1, 2, 3);
    source.pipe(
      scan((acc, cur) => acc + cur, 0)
    ).subscribe(val => {
      console.log('val: ' + val)
    });
    // 结果：
    //   val: 1
    //   val: 3
    //   val: 6
  }



  // merge
  //    合并为一个Observable
  mergeFn(): void {
    const first = interval(1500).pipe(mapTo('first'));
    const second = interval(1000).pipe(mapTo('second'));;

    merge(first, second)
      .pipe(take(6))
      .subscribe(val => console.log(val));

    // 结果: 
    //   second
    //   first
    //   second
    //   first
    //   second
    //   second
  }

  // forkJoin
  //    替换方案：使用zip + last组合实现
  //    仅获取每一个Observable发出的最后一个值
  // 注：内部Observable必须会complete，否则subscribe不会发出值
  forkJoinFn(): void {
    const source = forkJoin([
      from([1,2,3,4,5]),
      from([5,6,7,8,9]),
      from([2,4,6,8,10])
    ]);
    // // 使用 zip + last 替换
    // const source = zip(
    //   from([1,2,3,4,5]),
    //   from([5,6,7,8,9]),
    //   from([2,4,6,8,10])
    // ).pipe(last());
    source.subscribe(val => console.log(val))
    // 结果:
    //   [5, 9, 10]
  }

  // concat
  //    合并，顺序 执行，顺序 发出
  concatFn(): void {
    concat(
      of('First').pipe(delay(1000)),
      of('Second').pipe(delay(1500)),
      of('Third').pipe(delay(2000))
    ).subscribe(val => console.log(val))
    // 结果:
    //   First    // 1秒后发出
    //   Second   // 再1.5秒后发出
    //   Third    // 再2秒后发出
  }

  // zip
  //    合并，一同 执行，一起发出
  zipFn(): void {
    zip(
      of('First').pipe(delay(1000)),
      of('Second').pipe(delay(1500)),
      of('Third').pipe(delay(2000))
    ).subscribe(val => console.log(val))
    // 结果:
    // ['First', 'Second', 'Third']  // 2秒后，全部完成一起发出
  }

  // race
  //    推送发出最快的一个
  raceFn(): void {
    race(
      of('First').pipe(delay(1000)),
      of('Second').pipe(delay(1500)),
      of('Third').pipe(delay(2000))
    ).subscribe(val => console.log(val))
    // 结果:
    // First
  }



  // share（相当于 publish + refCount）
  //    实现多播的最方便方式(不用管何时启动，何时停止执行)
  //    如下：两个订阅者共用Observable的next变化
  shareFn(): void {
    const source = interval(500).pipe(take(5));
    const refCounted = source.pipe(share());

    console.log('observerA subscribe');
    refCounted.subscribe({
      next: val => console.log('observerA val: ' + val)
    });

    setTimeout(() => {
      console.log('observerB subscribe');
      refCounted.subscribe({
        next: val => console.log('observerB val: ' + val)
      });
    }, 2000);
    // 结果：
    //   observerA subscribe
    //   observerA val: 0
    //   observerA val: 1
    //   observerA val: 2
    //   observerA val: 3
    //   observerB subscribe
    //   observerA val: 4
    //   observerB val: 4
  }

}
