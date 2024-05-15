import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialCdkComponent } from './material-cdk.component';
import { DragDropBasicComponent } from './drag-drop-basic/drag-drop-basic.component';
import { DropListDemoComponent } from './drop-list-demo/drop-list-demo.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialCdkComponent,
    children: [
      { path: 'drag-drop', component: DragDropBasicComponent },
      { path: 'drop-list', component: DropListDemoComponent },

      { path: '', redirectTo: 'drag-drop', pathMatch: 'full' },
      { path: '**', redirectTo: 'drag-drop' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialCdkRoutingModule { }
