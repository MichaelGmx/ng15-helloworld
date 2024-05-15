import { Component } from '@angular/core';

import { Logger } from '../providers/logger';
import { EvenBetterLogger } from '../providers/even.better.logger';
import { UserService } from '../providers/user.service';

@Component({
  selector: 'inject-use-class-inherit-adv',
  templateUrl: './inject-use-class-inherit-adv.component.html',
  styles: [`
    button { margin-right: 8px; }
  `],
  providers: [
    UserService,

    // 提供 不同于令牌的类
    // 且 替代类有自己的依赖项(此处是UserService)
    { provide: Logger, useClass: EvenBetterLogger },
  ]
})
export class InjectUseClassInheritAdvComponent {

  constructor(
    private logger: Logger,
    private userService: UserService,
  ) { }

  init() {
    this.userService.user = {
      name: 'Luck',
      age: 20
    };
    console.log('user: ', this.userService.user);
  }

  logItem() {
    this.logger.log('some message');
  }

}
