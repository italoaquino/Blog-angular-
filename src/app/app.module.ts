import { SidenavComponent } from './template/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './template/header/header.component';
import { FormcategoryRoutingModule } from './form-category/formcategory-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormEditComponent } from './formEdit/form-edit.component';
import { FormEditPostComponent } from './form-edit-post/form-edit-post/form-edit-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    FormEditComponent,
    FormEditPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormcategoryRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,

    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
