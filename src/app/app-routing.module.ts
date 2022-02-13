import { FormcategoryComponent } from './form-category/formcategory/formcategory.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEditComponent } from './formEdit/form-edit.component';

const routes: Routes = [
  {
    path : '' , redirectTo : 'home', pathMatch : 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
,
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  }

  ,{
    path: 'category',
    loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
  },
  {
    path: 'formCategory',
    loadChildren: () => import('./form-category/formcategory.module').then(m => m.FormcategoryModule)
  },
  {
    path: 'editar/:id', component: FormEditComponent
  },
  {
    path: 'editarPost/:id',
    loadChildren: () => import('./form-edit-post/form-edit-post.module').then(m => m.FormEditPostModule)
  },
  {
    path: 'formPost',
    loadChildren: () => import('./form-post/form-post.module').then(m => m.FormPostModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
