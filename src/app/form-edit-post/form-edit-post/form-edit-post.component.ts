import { Category } from '../../category/models/Category';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../posts/services/post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category/services/category.service';
import { Post } from 'src/app/posts/models/Post';

@Component({
  selector: 'app-form-edit-post',
  templateUrl: './form-edit-post.component.html',
  styleUrls: ['./form-edit-post.component.css']
})
export class FormEditPostComponent implements OnInit {

  post !: Post;

  category !: Category[];

  editPostForm = new FormGroup({
    tittle : new FormControl('', Validators.required),
    subtittle : new FormControl('', Validators.required),
    author : new FormControl('', Validators.required),
    text : new FormControl('', Validators.required),
    category_id : new FormControl('', Validators.required)
  })

  constructor(private postService : PostService, private categoryService : CategoryService, private activedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activedRoute.snapshot.paramMap.get('id');
    this.postService.findById(id).subscribe(
      data => {
        this.post = data;
        this.editPostForm.setValue({
          tittle : this.post.tittle,
          subtittle : this.post.subtittle,
          author : this.post.author,
          text : this.post.text,
          category_id : this.post.category_id
        })
      }
    )
    this.categoryService.list().subscribe(
      dados => {
        this.category = dados;
      }
    )
  }

  onSubmit(form : Post, id : any){
    this.postService.update(form, id).subscribe(
      dados => {
        console.log(dados);
      }
    )

    }



}
