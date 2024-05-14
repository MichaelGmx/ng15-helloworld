import { Component } from '@angular/core';

import { CompAComponent } from './comp-a.component';
import { CompBComponent } from './comp-b.component';
import { CompCComponent } from './comp-c.component';

@Component({
  selector: 'app-ng-component-outlet-demo',
  templateUrl: './ng-component-outlet-demo.component.html',
  styleUrls: ['./ng-component-outlet-demo.component.scss']
})
export class NgComponentOutletDemoComponent {

  chooseForm = 'A';

  mapping = new Map<string, any>(
    [
      ['A', CompAComponent],
      ['B', CompBComponent],
      ['C', CompCComponent],
    ]
  );

}
