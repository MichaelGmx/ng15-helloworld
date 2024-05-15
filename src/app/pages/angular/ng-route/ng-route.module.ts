import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { NgRouteRoutingModule } from './ng-route-routing.module';

import { NgRouteComponent } from './ng-route.component';
import { ActivatedRouteDemoComponent } from './activated-route-demo/activated-route-demo.component';

@NgModule({
  declarations: [NgRouteComponent, ActivatedRouteDemoComponent],
  imports: [SharedModule, NgRouteRoutingModule],
  providers: [],
})
export class NgRouteModule { }
