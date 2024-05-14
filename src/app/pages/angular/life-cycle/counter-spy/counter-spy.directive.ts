import { Directive } from '@angular/core';
import { LoggerService } from '../logger.service';

let nextId = 1;

@Directive({
  selector: '[appCounterSpy]'
})
export class CounterSpyDirective {

  private id = nextId++;

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
    this.logger.log(`Spy #${this.id} onInit`);
  }

  ngOnDestroy(): void {
    this.logger.log(`Spy #${this.id} onDestroy`);
  }

}
