import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category/category.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CategoryComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    BsDatepickerModule,
    MatIconModule,
    HttpClientModule,
    ModalModule,
    ModalModule.forRoot(),
  ]
})
export class CategoryModule { }
