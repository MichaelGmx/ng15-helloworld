import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveFormDemoComponent {

  name: FormControl;

  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  nestedForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.name = new FormControl('name1', Validators.minLength(6));

    this.form1 = new FormGroup({
      first: new FormControl('first1'),
      last: new FormControl('last1')
    });

    this.form2 = this.formBuilder.group({
      first: 'first2',
      last: 'last2'
    });

    this.form3 = this.formBuilder.group({
      first: ['', Validators.required ],
      last: [''],
    });

    const addressGroup = this.formBuilder.group({
      street: 'street1',
      city: 'city1',
      state: 'state1',
      zip: 'zip1'
    });
    this.nestedForm = this.formBuilder.group({
      name: ['some', Validators.required ],
      address: addressGroup
    });
  }

}
