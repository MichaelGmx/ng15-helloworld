import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-model-demo',
  templateUrl: './ng-model-demo.component.html',
  styleUrls: ['./ng-model-demo.component.scss']
})
export class NgModelDemoComponent {

  username: string = 'Nero';

  description: string;

  constructor() { }

  onSubmit(formGroup: NgForm) {
    console.log('form value: ', formGroup.value);
    console.log('form valid: ', formGroup.valid);
  }

  changeValue(val: string) {
    this.description = val;
  }
}
