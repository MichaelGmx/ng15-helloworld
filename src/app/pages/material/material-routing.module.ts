import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponent } from './material.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialComponent,
    children: [
      { path: 'cdk', loadChildren: () => import('./cdk/material-cdk.module').then(m => m.MaterialCdkModule)},
      { path: 'components', loadChildren: () => import('./components/material-components.module').then(m => m.ComponentsModule)},
    
      { path: '', redirectTo: 'cdk', pathMatch: 'full' },
      { path: '**', redirectTo: 'cdk' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
