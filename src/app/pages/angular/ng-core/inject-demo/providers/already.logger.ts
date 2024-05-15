import { Injectable } from '@angular/core';

@Injectable()
export class AlreadyLogger {

  loggers = [];

  constructor() { }

  log(message: string) {
    this.loggers.push(message);

    console.log('AlreadyLogger 记录：', message);
  }

}
