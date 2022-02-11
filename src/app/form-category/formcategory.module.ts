import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormcategoryRoutingModule } from './formcategory-routing.module';
import { FormcategoryComponent } from './formcategory/formcategory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormcategoryComponent
  ],
  imports: [
    CommonModule,
    FormcategoryRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormcategoryModule { }
