import { AfterViewInit, Component, ElementRef, EmbeddedViewRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template-container-ref',
  templateUrl: './template-container-ref.component.html',
  styleUrls: ['./template-container-ref.component.scss']
})
export class TemplateContainerRefComponent implements AfterViewInit {
  @ViewChild('box') readonly boxEl: ElementRef;

  // @ViewChild('firstContainer', { read: ViewContainerRef, static: true }) readonly firstContainer: ViewContainerRef;
  @ViewChild('firstContainer', { read: ViewContainerRef }) readonly firstContainer: ViewContainerRef;
  @ViewChild('secondContainer', { read: ViewContainerRef, static: true }) readonly secondContainer: ViewContainerRef;

  @ViewChild('firstTpl') readonly firstTpl: TemplateRef<any>;
  @ViewChild('secondTpl') readonly secondTpl: TemplateRef<any>;
  @ViewChild('thirdTpl') readonly thirdTpl: TemplateRef<any>;

  @ViewChild('freeTpl') readonly freeTpl: TemplateRef<any>;
  private freeViewRef: EmbeddedViewRef<any>;

  @ViewChild('customTpl') readonly customTpl: TemplateRef<any>;
  indexOfCustomTpl = 0;



  insert(tpl: TemplateRef<any>) {
    const view = tpl.createEmbeddedView(null);
    this.firstContainer.insert(view);
  }

  insertAll() {
    [this.secondTpl, this.thirdTpl].forEach(tpl => {
      const view = tpl.createEmbeddedView(null);
      this.firstContainer.insert(view);
    });
  }

  createCustomEmbeddedViewTo3() {
    let count = 0;
    this.firstContainer.createEmbeddedView(this.customTpl, { $implicit: '默认值', customParam: `自定义值${this.indexOfCustomTpl++}` }, 3);
  }


  insertFreeToIndex_1() {
    this.firstContainer.insert(this.freeViewRef, 1);
  }

  move() {
    this.firstContainer.move(this.freeViewRef, 2);
  }



  move2To4() {
    const view = this.firstContainer.detach(1);  // 取出Index1的元素（并没有清除它）
    // 注：取出后，元素列表自动上移（原Index2元素 去到 Index1, 原Index3元素 去到 Index2）
    this.firstContainer.insert(view, 3);         // 插入到 Index3
  }

  

  detachLast() {
    this.firstContainer.detach();
  }

  moveToOther() {
    const view = this.firstContainer.detach();
    this.secondContainer.insert(view);
  }



  clearAll() {
    this.firstContainer.clear();
  }
  clearAll2() {
    this.secondContainer.clear();
  }



  getOne() {
    console.log('容器1中 index为2的元素: ', this.firstContainer.get(2));
    console.log('freeViewRef在 容器1中的index: ', this.firstContainer.indexOf(this.freeViewRef));
  }
  
  

  ngAfterViewInit(): void {
    // 若不使用 ViewChild自带的 static: true (变更检测后获取)，可以使用setTimeout将code放到事件循环的最后执行
    // 这样才可以正常获取到 firstContainer
    setTimeout(() => {
      const firstView = this.firstTpl.createEmbeddedView(null);
      this.firstContainer.insert(firstView);
    });

    // 初始化Free View
    this.freeViewRef = this.freeTpl.createEmbeddedView({ $implicit: 'defaultValue', free: 'aa' });
    console.log('freeViewRef: ', this.freeViewRef);

    console.log('box DOM: ', this.boxEl.nativeElement);
  }

}
