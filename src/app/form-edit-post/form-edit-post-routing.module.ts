import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEditPostComponent } from './form-edit-post/form-edit-post.component';

const routes: Routes = [
  {
    path : '', component : FormEditPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormEditPostRoutingModule { }
