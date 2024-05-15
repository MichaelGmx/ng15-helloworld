import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { TemplateContainerRefRoutingModule } from './template-container-ref-routing.module';
import { TemplateContainerRefComponent } from './template-container-ref/template-container-ref.component';


@NgModule({
  declarations: [
    TemplateContainerRefComponent
  ],
  imports: [
    SharedModule,

    TemplateContainerRefRoutingModule
  ]
})
export class TemplateContainerRefModule { }
