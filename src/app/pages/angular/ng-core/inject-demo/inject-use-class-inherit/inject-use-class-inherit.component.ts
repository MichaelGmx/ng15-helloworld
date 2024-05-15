import { Component } from '@angular/core';

import { Logger } from '../providers/logger';
import { BetterLogger } from '../providers/better.logger';

@Component({
  selector: 'inject-use-class-inherit',
  templateUrl: './inject-use-class-inherit.component.html',
  providers: [
    // 提供 不同于令牌的类
    { provide: Logger, useClass: BetterLogger },
  ]
})
export class InjectUseClassInheritComponent {

  constructor(
    private logger: Logger,
  ) { }

  logItem() {
    this.logger.log('some message');
  }

}
