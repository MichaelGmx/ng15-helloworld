import { Component, ViewChild } from '@angular/core';
import { Hero } from '../../hero';
import { OnChangesComponent } from '../on-changes/on-changes.component';

@Component({
  selector: 'app-on-changes-parent',
  templateUrl: './on-changes-parent.component.html',
  styleUrls: ['../../lifecycle-hook.scss'],
})
export class OnChangesParentComponent {
  hero!: Hero;
  power = '';
  @ViewChild(OnChangesComponent) childView!: OnChangesComponent;

  constructor() {
    this.reset();
  }

  reset() {
    this.hero = new Hero('Windstrom');
    this.power = 'sing';
    if (this.childView) {
      this.childView.reset();
    }
  }
}
