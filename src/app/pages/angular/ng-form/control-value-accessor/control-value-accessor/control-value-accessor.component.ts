import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-control-value-accessor',
  templateUrl: './control-value-accessor.component.html',
  styleUrls: ['./control-value-accessor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlValueAccessorComponent {
  helloForm: FormGroup;

  formResult: any;

  constructor(
    private formBuilder: FormBuilder
  ) {
    // 方式1：
    // this.helloForm = this.formBuilder.group({
    //   counter: 5
    // });

    // 方式2：
    this.helloForm = new FormGroup({
      counter: new FormControl(5),
    });
  }

  onSubmit() {
    this.formResult = this.helloForm.getRawValue();
  }

}
