import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child-panel',
  template: `
    <p>view-child-panel works!</p>
  `,
})
export class ViewChildPanelComponent {
  readonly name = 'panel param';

}
