import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-change-detector',
  templateUrl: './change-detector.component.html',
  styleUrls: ['./change-detector.component.scss'],
})
export class ChangeDetectorComponent {

  count = 0;

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  add() {
    this.count++;
  }

  detach() {
    // 脱离 变更检测
    this.cdr.detach();
  }

  reattach() {
    // 重新链接入 变更检测
    this.cdr.reattach();
  }
    
  trigger() {
    // 手动触发 变更检测
    this.cdr.detectChanges();
  }

  /*
  markCheck() {
    // 标记 在下次 变更检测时，执行
    // 一般配合 OnPush变更检测策略 一起使用
    this.cdr.markForCheck();
  }
  */

}
