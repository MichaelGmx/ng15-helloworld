import { Component, ContentChild } from '@angular/core';
import { ZippyContentDirective } from '../zippy-content.directive';

// let nextId = 0;

@Component({
  selector: 'app-conditional-content-demo',
  templateUrl: './conditional-content-demo.component.html',
})
export class ConditionalContentDemoComponent {
  // contentId = `zippy-${nextId++}`;

  expanded: boolean = false;

  @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;

}
