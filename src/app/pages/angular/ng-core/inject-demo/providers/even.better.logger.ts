import { Injectable } from '@angular/core';

import { Logger } from './logger';
import { UserService } from './user.service';

@Injectable()
export class EvenBetterLogger extends Logger {

  constructor(
    private userService: UserService
  ) {
    super();
  }

  override log(message: string) {
    // 可以对原Class进行改写等进一步操作
    // 且有依赖项
    const { name } = this.userService.user;
    super.log(`Message to ${name}: ${message}`);
  }

}
