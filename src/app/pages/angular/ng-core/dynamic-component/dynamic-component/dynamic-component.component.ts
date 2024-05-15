import { DOCUMENT } from '@angular/common';
import { ApplicationRef, Component, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Inject, Injector, Renderer2 } from '@angular/core';
import { UxAlertComponent } from '../ux-alert/ux-alert.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss'],
})
export class DynamicComponentComponent {
  private uxAlert: UxAlertComponent;
  private componentRef: ComponentRef<UxAlertComponent>;

  constructor(
    private cfr: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    @Inject(DOCUMENT) private doc: Document,
    private rd2: Renderer2
  ) { }

  showAlert() {
    if (!this.uxAlert) {
      this.uxAlert = this.getContainer();
    }

    // 调用组件的公共方法
    this.uxAlert.setOptions({ content: '提示文字', theme: 'success' });
  }

  private getContainer() {
    // 创建指定类型的组件工厂（生产指定类型的组件）
    const factory = this.cfr.resolveComponentFactory<UxAlertComponent>(UxAlertComponent);

    // 根据指定的类型，创建组件的实例
    this.componentRef = factory.create(this.injector);

    // 将组件添加到视图树中，以激活变更检测
    this.appRef.attachView(this.componentRef.hostView);

    // 将组件模版(包括app-ux-alert标签)，添加到body最后
    // document.body.appendChild((this.componentRef.hostView as EmbeddedViewRef<UxAlertComponent>).rootNodes[0] as HTMLElement);
    this.rd2.appendChild(this.doc.body, this.componentRef.location.nativeElement);

    // 监听组件销毁事件
    this.componentRef.onDestroy(_ => {
      console.log('UxAlert销毁 回调');
    });

    // 获取组件实例，相当于用@ViewChild获取子组件一样
    const { instance } = this.componentRef;

    // 组件的output事件
    instance.closed.subscribe(_ => {
      this.componentRef.destroy();
      this.uxAlert = null;
    });

    return instance;
  }

}
