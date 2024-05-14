import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss']
})
export class PipeDemoComponent implements OnInit {

  str1 = 'aBc';
  date1 = Date.now();
  num1 = 12345.6789;
  num2 = 0.345678;
  obj = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  asyncObj1: Promise<string>;
  asyncObj2: Observable<string>;

  constructor() { }

  ngOnInit(): void {
    
  }

  loadPromise() {
    this.asyncObj1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Str from Promise');
      }, 2000);
    });
  }

  loadObservable() {
    // this.asyncObj2 = new Observable<string>(observer => {
    //   setTimeout(() => {
    //     observer.next('Str from Observable');
    //   }, 2000);
    // });
    this.asyncObj2 = of('Str from Observable').pipe(
      delay(2000)
    );
  }

}
