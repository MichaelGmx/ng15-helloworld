import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialComponentsComponent } from './material-components.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialComponentsComponent,
    children: [
      { path: 'table', component: TableComponent },

      { path: '', redirectTo: 'table', pathMatch: 'full' },
      { path: '**', redirectTo: 'table' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
