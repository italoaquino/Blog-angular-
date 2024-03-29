import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormPostRoutingModule } from './form-post-routing.module';
import { FormpostComponent } from './formpost/formpost.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormpostComponent
  ],
  imports: [
    CommonModule,
    FormPostRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormPostModule { }
