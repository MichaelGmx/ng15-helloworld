import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/@shared/shared.module';

import {
  CardModule,
  DataTableModule,
  CheckBoxModule,
  DatepickerModule, } from 'ng-devui';

import { TodoRoutingModule } from './todo-routing.module';

import { TodoComponent } from './todo.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    TodoComponent,

    TaskDetailComponent,
    TaskListComponent
  ],
  imports: [
    ReactiveFormsModule,

    SharedModule,     // 其中包含 大多数 DevUI 的 Module

    // 本Demo 单独使用的 DevUI Module
    CardModule,
    DataTableModule,
    CheckBoxModule,
    DatepickerModule,

    TodoRoutingModule
  ]
})
export class TodoModule { }
