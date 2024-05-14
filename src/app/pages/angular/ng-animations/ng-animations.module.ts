import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { NgAnimationsRoutingModule } from './ng-animations-routing.module';

import { NgAnimationsComponent } from './ng-animations.component';
import { SampleAnimateDemoComponent } from './sample-animate-demo/sample-animate-demo.component';
import { MyPracticeComponent } from './my-practice/my-practice.component';


@NgModule({
  declarations: [
    NgAnimationsComponent,
    SampleAnimateDemoComponent,
    MyPracticeComponent,
  ],
  imports: [SharedModule, NgAnimationsRoutingModule],
  providers: [],
})
export class NgAnimationsModule { }
