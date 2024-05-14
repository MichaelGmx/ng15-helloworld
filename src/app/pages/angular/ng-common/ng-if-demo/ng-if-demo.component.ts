import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ng-if-demo',
  templateUrl: './ng-if-demo.component.html',
  styleUrls: ['./ng-if-demo.component.scss']
})
export class NgIfDemoComponent {
  condition = true;

  userObservable = new Subject<{ first: string; last: string }>();

  first = ['John', 'Mike', 'Mary', 'Bob'];
  firstIndex = 0;
  last = ['Smith', 'Novotny', 'Angulr'];
  lastIndex = 0;

  nextUser() {
    let first = this.first[this.firstIndex++];
    if (this.firstIndex >= this.first.length) this.firstIndex = 0;
    let last = this.last[this.lastIndex++];
    if (this.lastIndex >= this.last.length) this.lastIndex = 0;

    this.userObservable.next({ first, last });
  }

}
