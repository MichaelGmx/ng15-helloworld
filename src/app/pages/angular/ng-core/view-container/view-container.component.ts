import { Component, ComponentFactoryResolver, ComponentRef, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-a-comp',
  template: '<p>A component</p>',
})
class AComponent { }

@Component({
  selector: 'app-b-comp',
  template: '<p>b component</p>',
})
class BComponent { }

@Component({
  selector: 'app-view-container',
  template: `
    <div style="padding: 1rem;">
      <d-button (click)="show('a')">Show A component</d-button>
      <d-button (click)="show('b')">Show B component</d-button>
      <ng-container #vc></ng-container>
    </div>
  `,
  styles: [`
    d-button { margin-right: 8px; }
  `]
})
export class ViewContainerComponent implements OnInit {
  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;

  component = null;

  aComponentRef: ComponentRef<AComponent>;
  bComponentRef: ComponentRef<BComponent>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector
  ) { }

  ngOnInit(): void {
    const aComponentFactory = this.resolver.resolveComponentFactory(AComponent);
    const bComponentFactory = this.resolver.resolveComponentFactory(BComponent);
    this.aComponentRef = aComponentFactory.create(this.injector);
    this.bComponentRef = bComponentFactory.create(this.injector);
  }

  show(type: string) {
    // this.component = type === 'a' ? AComponent : BComponent;
    // const factory = this.resolver.resolveComponentFactory(this.component);
    // this.vc.clear();
    // this.vc.createComponent(factory);

    const view = type === 'a' ? this.aComponentRef.hostView : this.bComponentRef.hostView;
    this.vc.detach();
    this.vc.insert(view);
  }

}
