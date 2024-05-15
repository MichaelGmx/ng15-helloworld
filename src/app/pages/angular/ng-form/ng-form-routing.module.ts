import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgFormComponent } from './ng-form.component';
import { NgModelDemoComponent } from './ng-model-demo/ng-model-demo.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

const routes: Routes = [
  {
    path: '',
    component: NgFormComponent,
    children: [
      { path: 'simple-form', component: SimpleFormComponent },
      { path: 'ng-model', component: NgModelDemoComponent },
      { path: 'reactive-form', component: ReactiveFormDemoComponent },
      { path: 'control-value-accessor', loadChildren: () => import('./control-value-accessor/control-value-accessor.module').then(m => m.ControlValueAccessorModule) },

      { path: '', redirectTo: 'simple-form', pathMatch: 'full' },
      { path: '**', redirectTo: 'simple-form' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgFormRoutingModule { }
