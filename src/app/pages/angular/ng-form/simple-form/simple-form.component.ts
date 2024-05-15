import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'ng-devui/toast';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {

  simpleForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService
  ) {
    this.simpleForm = this.formBuilder.group({
      name: [ null, Validators.required ],
      age: [ null ],
      gender: [ null ],
      address: this.formBuilder.group({
        street: [ '街道默认值' ],
        district: [ null ]
      })
    });
  }

  ngOnInit(): void { }

  // 重置表单
  resetForm(): void {
    this.simpleForm.reset({
      name: null,
      age: null,
      gender: null,
      address: {
        street: '街道默认值',
        district: null
      }
    });
  }

  // 提交
  onSubmit(): void {
    // 验证form状态
    for (const i in this.simpleForm.controls) {
      this.simpleForm.controls[i].markAsDirty();
      this.simpleForm.controls[i].updateValueAndValidity();
    }

    if (this.simpleForm.invalid) {
      this.toastService.open({
        value: [{ severity: 'error', summary: '请先正确填写表单' }],
      });
      return;
    }

    console.log('表单内容：', this.simpleForm.getRawValue());
  }
}
