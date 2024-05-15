import { Component } from '@angular/core';

import { UserService } from '../providers/user.service';
import { UserLoggerService } from '../providers/user.logger.service';

@Component({
  selector: 'inject-use-factory',
  templateUrl: './inject-use-factory.component.html',
  styles: [`
    button { margin-right: 8px; }
  `],
  providers: [
    // 工厂提供者
    UserService,
    {
      provide: UserLoggerService,
      useFactory(userServe: UserService) {
        return new UserLoggerService(userServe);
      },
      deps: [UserService]  // 依赖于某些服务
    }
  ]
})
export class InjectUseFactoryComponent {

  constructor(
    private userService: UserService,
    private logger: UserLoggerService,
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
