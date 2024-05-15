import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { RxjsRoutingModule } from './rxjs-routing.module';

import { RxjsComponent } from './rxjs.component';
import { FirstRxjsComponent } from './first-rxjs/first-rxjs.component';
import { ObservableComponent } from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';
import { OperatorsComponent } from './operators/operators.component';
import { DemoAutocompleteComponent } from './demo-autocomplete/demo-autocomplete.component';

@NgModule({
  declarations: [
    RxjsComponent,
    FirstRxjsComponent,
    ObservableComponent,
    SubjectComponent,
    OperatorsComponent,
    DemoAutocompleteComponent
  ],
  imports: [
    SharedModule,

    RxjsRoutingModule
  ]
})
export class RxjsModule { }
