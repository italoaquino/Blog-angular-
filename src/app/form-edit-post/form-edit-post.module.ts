import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormEditPostRoutingModule } from './form-edit-post-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormEditPostRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormEditPostModule { }
