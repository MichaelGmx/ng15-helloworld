import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { Renderer2DemoRoutingModule } from './renderer2-demo-routing.module';

import { Renderer2DemoComponent } from './renderer2-demo/renderer2-demo.component';
import { DragDirective } from './drag.directive';

@NgModule({
  declarations: [
    Renderer2DemoComponent,
    DragDirective,
  ],
  imports: [
    SharedModule,

    Renderer2DemoRoutingModule
  ]
})
export class Renderer2DemoModule { }
