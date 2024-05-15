import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgCoreComponent } from './ng-core.component';
import { NgZoneDemoComponent } from './ng-zone-demo/ng-zone-demo.component';
import { ChangeDetectorComponent } from './change-detector/change-detector.component';
import { ViewContainerComponent } from './view-container/view-container.component';

const routes: Routes = [
  {
    path: '',
    component: NgCoreComponent,
    children: [
      { path: 'inject', loadChildren: () => import('./inject-demo/inject-demo.module').then((m) => m.InjectDemoModule) },
      { path: 'ng-zone', component: NgZoneDemoComponent },
      { path: 'renderer2', loadChildren: () => import('./renderer2-demo/renderer2-demo.module').then(m => m.Renderer2DemoModule) },
      { path: 'change-detector', component: ChangeDetectorComponent },
      { path: 'change-detection-strategy', loadChildren: () => import('./change-detection-strategy-demo/change-detection-strategy-demo.module').then(m => m.ChangeDetectionStrategyDemoModule) },
      { path: 'template-container-ref', loadChildren: () => import('./template-container-ref/template-container-ref.module').then(m => m.TemplateContainerRefModule) },
      { path: 'ng-content', loadChildren: () => import('./ng-content-demo/ng-content-demo.module').then(m => m.NgContentDemoModule) },
      { path: 'view-child', loadChildren: () => import('./view-child/view-child.module').then(m => m.ViewChildModule) },
      { path: 'content-child', loadChildren: () => import('./content-child/content-child.module').then(m => m.ContentChildModule) },
      { path: 'dynamic-component', loadChildren: () => import('./dynamic-component/dynamic-component.module').then(m => m.DynamicComponentModule) },
      { path: 'view-container', component: ViewContainerComponent },

      { path: '', redirectTo: 'inject-demo', pathMatch: 'full' },
      { path: '**', redirectTo: 'inject-demo' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgCoreRoutingModule { }
