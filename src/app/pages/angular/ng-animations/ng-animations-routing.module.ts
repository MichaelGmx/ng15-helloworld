import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgAnimationsComponent } from './ng-animations.component';
import { SampleAnimateDemoComponent } from './sample-animate-demo/sample-animate-demo.component';
import { MyPracticeComponent } from './my-practice/my-practice.component';

const routes: Routes = [
  {
    path: '',
    component: NgAnimationsComponent,
    children: [
      { path: 'sample-animate-demo', component: SampleAnimateDemoComponent },
      { path: 'my-practice', component: MyPracticeComponent },

      { path: '', redirectTo: 'sample-animate-demo', pathMatch: 'full' },
      { path: '**', redirectTo: 'sample-animate-demo' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgAnimationsRoutingModule { }
