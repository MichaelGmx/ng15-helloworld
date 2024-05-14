import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterSpyComponent } from './counter-spy/counter-spy.component';

const routes: Routes = [
  { path: '', component: CounterSpyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterSpyRoutingModule { }
