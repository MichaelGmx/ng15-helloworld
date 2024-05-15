import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RefreshCandeactivatePageRoutingModule } from './refresh-candeactivate-routing.module';

import { RefreshCandeactivatePage } from './refresh-candeactivate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RefreshCandeactivatePageRoutingModule
  ],
  declarations: [RefreshCandeactivatePage]
})
export class RefreshCandeactivatePageModule {}
