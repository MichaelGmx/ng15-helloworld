import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet-demo',
  templateUrl: './ng-template-outlet-demo.component.html',
  styleUrls: ['./ng-template-outlet-demo.component.scss']
})
export class NgTemplateOutletDemoComponent {

  myContext = { $implicit: 'World', param2: 'Svet' };

  myContext2 = {
    person: {
      name: 'Angular',
    },
  };

}
