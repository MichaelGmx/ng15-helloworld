import { Directive, HostBinding, HostListener } from '@angular/core';
import { ConditionalContentDemoComponent } from './conditional-content-demo/conditional-content-demo.component';

@Directive({
  selector: '[appZippyToggleBtn]'
})
export class ZippyToggleBtnDirective {
  // @HostBinding('attr.aria-expanded') ariaExpanded = this.zippy.expanded;
  // @HostBinding('attr.aria-controls') ariaControls = this.zippy.contentId;

  @HostListener('click') toggleZippy() {
    this.componentEl.expanded = !this.componentEl.expanded;
  }

  constructor(
    public componentEl: ConditionalContentDemoComponent
  ) { }

}
