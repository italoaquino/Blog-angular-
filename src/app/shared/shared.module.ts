import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ConfirmedModalComponent } from './confirmed-modal/confirmed-modal.component';


@NgModule({
  declarations: [
    ConfirmedModalComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
