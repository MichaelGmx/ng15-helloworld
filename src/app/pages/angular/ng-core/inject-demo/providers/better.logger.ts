import { Injectable } from '@angular/core';

import { Logger } from './logger';

@Injectable()
export class BetterLogger extends Logger {

  constructor() {
    super();
  }

  override log(message: string) {
    // 可以对原Class进行改写等进一步操作
    super.log(`BetterLogger: ${message}`);
  }

}
