import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inject-demo',
  templateUrl: './inject-demo.component.html',
  styleUrls: ['./inject-demo.component.scss']
})
export class InjectDemoComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    window.dispatchEvent(new Event('resize'));
  }
}
