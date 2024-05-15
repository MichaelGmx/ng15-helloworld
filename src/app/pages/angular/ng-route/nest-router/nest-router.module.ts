import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { NestRouterRoutingModule } from './nest-router-routing.module';
import { NestRouterComponent } from './nest-router/nest-router.component';
import { Child1RouterComponent } from './child1-router.component';
import { Child2RouterComponent } from './child2-router.component';


@NgModule({
  declarations: [
    NestRouterComponent,
    Child1RouterComponent,
    Child2RouterComponent
  ],
  imports: [
    SharedModule,
    NestRouterRoutingModule
  ]
})
export class NestRouterModule { }
