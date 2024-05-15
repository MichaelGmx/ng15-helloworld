import { Injectable } from '@angular/core';

@Injectable()
export class Logger {

  loggers = [];

  constructor() { }

  log(message: string) {
    this.loggers.push(message);

    console.log('Logger 记录：', message);
  }

}
