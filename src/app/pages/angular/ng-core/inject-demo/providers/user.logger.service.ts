import { Injectable } from '@angular/core';
import { Logger } from './logger';
import { UserService } from './user.service';

@Injectable()
export class UserLoggerService extends Logger {

  constructor(
    private userService: UserService
  ) {
    super();
    console.log(`UserLoggerService constructor runs, UsedBy 'inject-use-factory'`);
  }

  override log(msg: string) {
    const name = this.userService.user.name;
    super.log(`Message to ${name}: ${msg}`)
  }

}
