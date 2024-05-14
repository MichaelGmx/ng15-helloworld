import { Component, ViewChild } from '@angular/core';
import { Hero } from '../../hero';
import { DoCheckComponent } from '../do-check/do-check.component';

@Component({
  selector: 'app-do-check-parent',
  templateUrl: './do-check-parent.component.html',
  styleUrls: ['../../lifecycle-hook.scss']
})
export class DoCheckParentComponent {
  hero!: Hero;
  power = '';

  @ViewChild(DoCheckComponent) doCheckComp: DoCheckComponent;

  constructor() {
    this.reset();
  }

  reset() {
    this.hero = new Hero('Windstorm');
    this.power = 'sing';
    if (this.doCheckComp) {
      this.doCheckComp.reset();
    }
  }

}
