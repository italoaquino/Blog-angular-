import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    MatIconModule
  ]
})
export class TemplateModule { }
