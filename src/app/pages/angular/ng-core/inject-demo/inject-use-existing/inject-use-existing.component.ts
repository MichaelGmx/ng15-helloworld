import { Component } from '@angular/core';

import { Logger } from '../providers/logger';
import { AlreadyLogger } from '../providers/already.logger';

@Component({
  selector: 'inject-use-existing',
  templateUrl: './inject-use-existing.component.html',
  providers: [
    // useExisting 指向已注册的服务，别名提供者
    AlreadyLogger,
    { provide: Logger, useExisting: AlreadyLogger },
  ]
})
export class InjectUseExistingComponent {

  constructor(
    private logger: Logger,
  ) { }

  logItem() {
    this.logger.log('some message');
  }

}
