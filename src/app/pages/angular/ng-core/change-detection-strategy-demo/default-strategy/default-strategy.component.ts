import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-default-strategy',
  templateUrl: './default-strategy.component.html',
})
export class DefaultStrategyComponent implements OnInit {

  lstOfItem = [];
  itemLoading = false;

  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.itemLoading = true;

    const data = [1, 2, 3];

    of(data)
      .pipe(delay(2000))
      .subscribe(res => {
        this.lstOfItem = res;
        this.itemLoading = false;
      });
  }

}
