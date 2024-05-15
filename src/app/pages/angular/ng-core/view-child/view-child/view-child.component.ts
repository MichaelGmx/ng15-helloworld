import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ViewChildPanelComponent } from '../view-child-panel.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss'],
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  // @ViewChild('box') private boxEl: ElementRef;
  @ViewChild('box', { static: true }) private boxEl: ElementRef;

  // @ViewChild(ViewChildPanelComponent) private panel: ViewChildPanelComponent;
  @ViewChild('myPanel', { read: ViewChildPanelComponent, static: true}) private panel: ViewChildPanelComponent;

  @ViewChildren('box') private boxEls: QueryList<ElementRef>;
  @ViewChildren(ViewChildPanelComponent) private lstOfPanel: QueryList<ViewChildPanelComponent>;

  showMidPanel: boolean = true;

  constructor() {
    // constructor中获取不到元素
    // console.log('constructor boxEl: ', this.boxEl.nativeElement);
  }

  ngOnInit(): void {
    // @ViewChild 开启[static: true]，可以在 变更检测前 获取到
    console.log('ngOnInit boxEl: ', this.boxEl.nativeElement);
    console.log('ngOnInit panel中变量：', this.panel.name);

    // 获取不到下面的元素
    console.log('ngOnInit boxEl列表：', this.boxEls);
    console.log('ngOnInit panel列表：', this.lstOfPanel);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit boxEl: ', this.boxEl.nativeElement);
    console.log('ngAfterViewInit panel中变量：', this.panel.name);   // 获取组件中 公有变量

    console.log('ngAfterViewInit boxEl列表：', this.boxEls);
    console.log('ngAfterViewInit panel列表：', this.lstOfPanel);

    // 监听 lstOfPanel 的 元素变化
    this.lstOfPanel.changes.subscribe(changes => {
      console.log('lstOfPanel changes: ', changes);
    });
  }

}
