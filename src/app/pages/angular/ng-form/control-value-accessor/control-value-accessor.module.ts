import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/@shared/shared.module';

import { ControlValueAccessorRoutingModule } from './control-value-accessor-routing.module';

import { ControlValueAccessorComponent } from './control-value-accessor/control-value-accessor.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    ControlValueAccessorComponent,
    CounterComponent
  ],
  imports: [
    SharedModule,

    ReactiveFormsModule,

    ControlValueAccessorRoutingModule
  ]
})
export class ControlValueAccessorModule { }
