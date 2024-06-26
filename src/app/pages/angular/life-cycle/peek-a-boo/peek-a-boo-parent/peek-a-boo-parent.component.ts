import { Component } from '@angular/core';

import { LoggerService } from '../../logger.service';

@Component({
  selector: 'app-peek-a-boo-parent',
  templateUrl: './peek-a-boo-parent.component.html',
  styleUrls: ['../../lifecycle-hook.scss'],
  providers: [ LoggerService ]
})
export class PeekABooParentComponent {

  hasChild = false;
  hookLog: string[] = [];

  heroName = 'Windstorm';

  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Windstorm';
      this.logger.clear();
    }
    this.hookLog = this.logger.logs;
    this.logger.tick();
  }

  updateHero() {
    this.heroName += '!';
    this.logger.tick();
  }

}
