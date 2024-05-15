import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { InjectDemoRoutingModule } from './inject-demo-routing.module';

import { InjectDemoComponent } from './inject-demo.component';
import { InjectUseClassComponent } from './inject-use-class/inject-use-class.component';
import { InjectUseClassInheritComponent } from './inject-use-class-inherit/inject-use-class-inherit.component';
import { InjectUseClassInheritAdvComponent } from './inject-use-class-inherit-adv/inject-use-class-inherit-adv.component';
import { InjectUseExistingComponent } from './inject-use-existing/inject-use-existing.component';
import { InjectUseFactoryComponent } from './inject-use-factory/inject-use-factory.component';
import { InjectUseValueComponent } from './inject-use-value/inject-use-value.component';
import { InjectionTokenComponent } from './injection-token/injection-token.component';

@NgModule({
  declarations: [
    InjectDemoComponent,

    InjectUseClassComponent,
    InjectUseClassInheritComponent,
    InjectUseClassInheritAdvComponent,
    InjectUseExistingComponent,
    InjectUseFactoryComponent,
    InjectUseValueComponent,
    InjectionTokenComponent,
  ],
  imports: [
    SharedModule,
    InjectDemoRoutingModule
  ]
})
export class InjectDemoModule { }
