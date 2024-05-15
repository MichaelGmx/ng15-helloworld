import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-on-push-strategy',
  templateUrl: './on-push-strategy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushStrategyComponent implements OnInit {

  lstOfItem = [];
  itemLoading = false;

  constructor(
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.itemLoading = true;

    const data = [1, 2, 3];

    of(data)
      .pipe(delay(2000))
      .subscribe(res => {
        this.lstOfItem = res;
        this.itemLoading = false;
        this.cdr.detach

        // this.cdr.markForCheck();   // 使用了 OnPush 策略后，需要手动触发 变更检测
      });
  }

}
