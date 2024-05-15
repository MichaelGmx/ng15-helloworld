import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionStrategyDemoComponent } from './change-detection-strategy-demo/change-detection-strategy-demo.component';


const routes: Routes = [
  { path: '', component: ChangeDetectionStrategyDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeDetectionStrategyDemoRoutingModule { }
