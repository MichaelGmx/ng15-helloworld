import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormLayout, ToastService } from 'ng-devui';

// import { NzMessageService } from 'ng-zorro-antd/message';

import { ITask } from './task.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {

  // 今日日期
  today: Date = new Date();

  // 待办事项
  lstOfTodoTasks: ITask[] = [
    {
      id: 1,
      name: '测试任务 - 1',
      description: '这是第一个测试任务',
      deadline: new Date('2024-05-20'),
      isDone: false
    },
    {
      id: 2,
      name: '测试任务 - 2',
      description: '这是第二个测试任务',
      deadline: new Date(),
      isDone: false
    }
  ];

  createForm: FormGroup;
  showAddForm: boolean = false;

  disabledDate: any;
  layoutDirection: FormLayout = FormLayout.Horizontal;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
  ) {
    this.createForm = this.fb.group({
      name       : [ null , [ Validators.required ] ],
      description: [ null ],
      isDone     : [ false ],
      deadline   : [ new Date() ]
    });
  }

  ngOnInit(): void { }

  // 显示 Form
  showTaskForm(isShow: boolean = false): void {
    if (isShow) {
      // 重置form
      this.createForm.reset({
        name: null,
        deadline: new Date()
      });
    }
    this.showAddForm = isShow;
  }

  // 新增 任务
  addTask(): void {
    // 验证form状态
    for (const i in this.createForm.controls) {
      this.createForm.controls[i].markAsDirty();
      this.createForm.controls[i].updateValueAndValidity();
    }

    if (this.createForm.valid) {
      const newTask: ITask = {
        ...this.createForm.getRawValue(),
        id: new Date().getTime()
      };
      // 更新待办列表
      this.lstOfTodoTasks = this.lstOfTodoTasks.concat([newTask]);

      this.createForm.get('name').reset();  // 重置form
      // this.showAddForm = false;             // 收起Form
      this.toastService.open({
        value: [{ severity: 'success', summary: '成功新增任务！' }],
      });
    }
  }

}
