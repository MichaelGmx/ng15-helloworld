import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss']
})
export class RatingStarComponent {

  galaxyForm: FormGroup;

  formResult: string;

  constructor() {
    this.galaxyForm = new FormGroup({
      rating: new FormControl({ value: null, disabled: false })
    });
  }

  onSubmit() {
    this.formResult = this.galaxyForm.getRawValue();
  }

}
