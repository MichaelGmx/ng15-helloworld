import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Renderer2DemoComponent } from './renderer2-demo/renderer2-demo.component';

const routes: Routes = [
  { path: '', component: Renderer2DemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Renderer2DemoRoutingModule { }
