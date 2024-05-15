import { Component } from '@angular/core';

import { Logger } from '../providers/logger';

@Component({
  selector: 'inject-use-class',
  templateUrl: './inject-use-class.component.html',
  providers: [
    Logger

    // 同上面的定义
    // { provide: Logger, useClass: Logger },
  ]
})
export class InjectUseClassComponent {

  constructor(
    private logger: Logger,
  ) { }

  logItem() {
    this.logger.log('some message');
  }

}
