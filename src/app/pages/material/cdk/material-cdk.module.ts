import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { MaterialCdkRoutingModule } from './material-cdk-routing.module';

import { MaterialCdkComponent } from './material-cdk.component';
import { DragDropBasicComponent } from './drag-drop-basic/drag-drop-basic.component';
import { DropListDemoComponent } from './drop-list-demo/drop-list-demo.component';

const MaterialModule = [
  DragDropModule,
];

@NgModule({
  declarations: [
    MaterialCdkComponent,
    DragDropBasicComponent,
    DropListDemoComponent
  ],
  imports: [
    SharedModule,

    ...MaterialModule,
    
    MaterialCdkRoutingModule
  ]
})
export class MaterialCdkModule { }
