import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
// import { NzMessageService } from 'ng-zorro-antd/message';
import { DrawerService, ToastService } from 'ng-devui';

import { TableWidthConfig } from 'ng-devui/data-table';

import { ITask } from '../task.interface';

import { TaskDetailComponent } from '../task-detail/task-detail.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TaskListComponent),
      multi: true
    }
  ]
})
export class TaskListComponent implements OnInit {

  lstOfTodoTasks: ITask[] = [];

  dataTableOptions = {
    columns: [
      {
        field: 'isDone',
        header: '-',
      },
      {
        field: 'name',
        header: '任务',
        fieldType: 'text'
      },
      {
        field: 'actions',
        header: 'actions',
      }
    ]
  };

  tableWidthConfig: TableWidthConfig[] = [
    {
      field: 'isDone',
      width: '50px'
    },
    {
      field: 'name',
      width: '300px'
    },
    {
      field: 'actions',
      width: '50px'
    }
  ];

  drawerEl: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private toastService: ToastService,
    private drawerService: DrawerService
  ) { }

  ngOnInit(): void { }

  /**
   * Update ngModel -> update listOfSelectedValue
   */
  onChange: (value: ITask[]) => void = () => [];
  onTouched: () => void = () => null;

  writeValue(tasks: ITask[]): void {
    if (tasks) {
      this.lstOfTodoTasks = [ ...tasks ];
      this.cdr.markForCheck();
    }
  }

  registerOnChange(fn: (value: ITask[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // 标记 完成
  checkTask(task: ITask): void {
    this.lstOfTodoTasks = this.lstOfTodoTasks.filter(item => item.id !== task.id);
    this.onChange(this.lstOfTodoTasks);
    const successText = this.lstOfTodoTasks.length ? '恭喜完成一项任务，继续加油！' : '恭喜你已完成所有任务！';
    this.toastService.open({
      value: [{ severity: 'success', summary: successText }],
    });
  }

  // 编辑 任务
  showEditTask(task: ITask): void {
    const closeHandle = (task) => {
      if (task) {
        this.lstOfTodoTasks = this.lstOfTodoTasks.map(v => {
          if (v.id === task.id) {
            v = task;
          }
          return v;
        });
        this.onChange(this.lstOfTodoTasks);
        this.toastService.open({
          value: [{ severity: 'success', summary: '成功更新了任务！' }],
        });
      }

      this.drawerEl.drawerInstance.hide();
    };
    this.drawerEl = this.drawerService.open({
      drawerContentComponent: TaskDetailComponent,
      width: '400px',
      data: {
        task,
        closeHandle,
      },
    })
  }

  // 删除 任务
  deleteTask(task: ITask): void {
    this.lstOfTodoTasks = this.lstOfTodoTasks.filter(item => item.id !== task.id);
    this.onChange(this.lstOfTodoTasks);
    this.toastService.open({
      value: [{ severity: 'warning', summary: '已删除此任务！' }],
    });
  }

}
