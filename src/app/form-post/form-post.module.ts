import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormPostRoutingModule } from './form-post-routing.module';
import { FormpostComponent } from './formpost/formpost.component';


@NgModule({
  declarations: [
    FormpostComponent
  ],
  imports: [
    CommonModule,
    FormPostRoutingModule
  ]
})
export class FormPostModule { }
