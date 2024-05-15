import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList } from '@angular/core';
import { ContentChildChildComponent } from './content-child-child.component';

@Component({
  selector: 'app-content-child-panel',
  template: `
    <div style="border: solid 1px; margin: 10px 0;">
      <ng-content select=".head"></ng-content>
    </div>
    <ng-content></ng-content>
  `
})
export class ContentChildPanelComponent implements OnInit, AfterContentInit, AfterViewInit {
  @ContentChild('list', { static: true }) private listEl: ElementRef;
  @ContentChild(ContentChildChildComponent, { static: true }) private childComponent: ContentChildChildComponent;

  // @ContentChildren(ContentChildChildComponent) private panels: QueryList<ContentChildChildComponent>;   // 不会包含嵌套在内部的
  @ContentChildren(ContentChildChildComponent, { descendants: true }) private lstOfPanel: QueryList<ContentChildChildComponent>;

  constructor() {
    // constructor中获取不到元素
    // - (constructor是在渲染前，DOM元素甚至都没有在doc中)
    // console.log('constructor listEl: ', this.listEl);
  }

  ngOnInit(): void {
    // @ContentChild 开启[static: true]，可以在 变更检测前 获取到
    console.log('★ ngOnInit listEl: ', this.listEl);
    console.log('★ ngOnInit 获取第一child子组件: ', this.childComponent);  // 获取 第一匹配到的
    console.log('★ ngOnInit child子组件列表: ', this.lstOfPanel);          // !!! 获取不到 !!!
    console.log('----------------------');
  }

  ngAfterContentInit(): void {
    console.log('★ ngAfterContentInit listEl: ', this.listEl);
    console.log('★ ngAfterContentInit 获取第一child子组件: ', this.childComponent);  // 获取 第一匹配到的
    console.log('★ ngAfterContentInit child子组件列表: ', this.lstOfPanel);          // 使用 descendants: true，可以取得3个（包括在嵌套层级中的）
    console.log('----------------------');
  }
  
  ngAfterViewInit(): void {
    console.log('★ ngAfterViewInit listEl: ', this.listEl);
    console.log('★ ngAfterViewInit 获取第一child子组件: ', this.childComponent);  // 获取 第一匹配到的
    console.log('★ ngAfterViewInit child子组件列表: ', this.lstOfPanel);          // 使用 descendants: true，可以取得3个（包括在嵌套层级中的）
  }

}