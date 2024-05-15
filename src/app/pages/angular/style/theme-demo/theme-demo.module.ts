import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { ThemeDemoRoutingModule } from './theme-demo-routing.module';

import { ThemeDemoComponent } from './theme-demo/theme-demo.component';
import { ThemeDemoChildComponent } from './theme-demo-child/theme-demo-child.component';

@NgModule({
  declarations: [
    ThemeDemoComponent,
    ThemeDemoChildComponent,
  ],
  imports: [
    SharedModule,

    ThemeDemoRoutingModule,
  ]
})
export class ThemeDemoModule { }
