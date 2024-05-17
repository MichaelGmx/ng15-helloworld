import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormLayout } from 'ng-devui';

import { ITask } from '../task.interface';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskDetailComponent implements OnInit {
  @Input() task: ITask;
  @Input() closeHandle: any;

  editForm: FormGroup;

  disabledDate: any;

  layoutDirection: FormLayout = FormLayout.Horizontal;


  constructor(
    private fb: FormBuilder,
  ) {
    this.editForm = this.fb.group({
      name       : [ null , [ Validators.required ] ],
      description: [ null ],
      isDone     : [ false ],
      deadline   : [ new Date() ]
    })
  }

  ngOnInit(): void {
    this.editForm.reset({
      ...this.task
    });
  }

  editTaskData(): void {
    this.cancelEdit({
      ...this.task,
      ...this.editForm.getRawValue()
    })
  }

  // 取消 编辑
  cancelEdit(data: ITask | null = null): void {
    // this.nzDrawerRef.close(data);
    this.closeHandle(data);
  }

}
