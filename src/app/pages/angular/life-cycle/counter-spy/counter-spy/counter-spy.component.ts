import { Component } from '@angular/core';
import { LoggerService } from '../../logger.service';

@Component({
  selector: 'app-counter-spy',
  templateUrl: './counter-spy.component.html',
  styleUrls: ['../../lifecycle-hook.scss'],
  providers: [LoggerService]
})
export class CounterSpyComponent {

  value = 0;
  spyLog: string[] = [];

  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.spyLog = logger.logs;
    this.resetCounter();
  }

  updateCounter() {
    this.value++;
    this.logger.tick();
  }

  resetCounter() {
    this.logger.log('reset');
    this.value = 0;
    this.logger.tick();
  }

}
