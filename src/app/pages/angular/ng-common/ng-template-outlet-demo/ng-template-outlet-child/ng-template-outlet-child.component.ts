import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet-child',
  templateUrl: './ng-template-outlet-child.component.html',
  styleUrls: ['./ng-template-outlet-child.component.scss']
})
export class NgTemplateOutletChildComponent {
  @Input() render: TemplateRef<any>;

  myContext = { $implicit: 'Hello', customVal: 'Angular' }

  constructor() { }

}
