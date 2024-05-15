import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/@shared/shared.module';

import { NgFormRoutingModule } from './ng-form-routing.module';

import { NgFormComponent } from './ng-form.component';
import { NgModelDemoComponent } from './ng-model-demo/ng-model-demo.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

@NgModule({
  declarations: [
    NgFormComponent,
    NgModelDemoComponent,
    ReactiveFormDemoComponent,
    SimpleFormComponent,
  ],
  imports: [
    SharedModule,        // 其中包含 FormModule
    ReactiveFormsModule,
    NgFormRoutingModule,
  ],
  providers: [],
})
export class NgFormModule { }
