import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';

import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged, switchMap,retry } from 'rxjs/operators';

@Injectable()
class WikiService {
  readonly url: string = 'https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*&search=';

  async getKeywords(keyword) {
    // return ajax.getJSON(this.url + keyword).pipe(map(res => res[1]));
    const res = await fetch(this.url + keyword);
    if (!res) return [];
    return res.json();
  }
}

@Component({
  selector: 'app-demo-autocomplete',
  templateUrl: './demo-autocomplete.component.html',
  styleUrls: ['../rxjs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [WikiService]
})
export class DemoAutocompleteComponent implements OnInit {
  @ViewChild('input', { static: true }) private inputEl: ElementRef;

  list: string[] = [];

  constructor(
    private wikiService: WikiService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    fromEvent(this.inputEl.nativeElement, 'input')
      .pipe(
        debounceTime(500),                                     // 防抖 500ms，同 debounce(() => timer(500))
        pluck('target', 'value'),                              // 提取对象属性 obj.target.value的值
        distinctUntilChanged(),                                // 只有当当前值与之前最后一个值不同时才将其发出
        switchMap(val => this.wikiService.getKeywords(val)),   // 获取到值后，发出请求，且在接收到新值时，取消上一次的订阅
        retry(3)                                               // 不成功的情况下，重试 3 次
      ).subscribe(keywordData => {
        console.log('keywordData: ', keywordData);
        this.list = keywordData[1];
        this.cdr.markForCheck();
      })
  }

}
