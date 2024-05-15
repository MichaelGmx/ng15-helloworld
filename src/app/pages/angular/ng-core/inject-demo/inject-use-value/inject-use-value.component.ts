import { Component } from '@angular/core';

import { Logger } from '../providers/logger';
import { SilentLogger } from '../providers/silent.logger';

@Component({
  selector: 'inject-use-value',
  templateUrl: './inject-use-value.component.html',
  providers: [
    Logger,

    // 值 提供者
    { provide: Logger, useValue: SilentLogger },
  ]
})
export class InjectUseValueComponent {

  constructor(
    private logger: Logger,
  ) { }

  logItem() {
    this.logger.log('some message');
  }

}
