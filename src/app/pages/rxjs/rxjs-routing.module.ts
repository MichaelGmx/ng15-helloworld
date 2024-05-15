import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RxjsComponent } from './rxjs.component';
import { FirstRxjsComponent } from './first-rxjs/first-rxjs.component';
import { ObservableComponent } from './observable/observable.component';
import { OperatorsComponent } from './operators/operators.component';
import { DemoAutocompleteComponent } from './demo-autocomplete/demo-autocomplete.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {
    path: '',
    component: RxjsComponent,
    children: [
      { path: 'first-rxjs', component: FirstRxjsComponent },
      { path: 'observable', component: ObservableComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'operators', component: OperatorsComponent },
      { path: 'demo-autocomplete', component: DemoAutocompleteComponent },

      { path: '', redirectTo: 'first-rxjs', pathMatch: 'full' },
      { path: '**', redirectTo: 'first-rxjs' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
