import { PostService } from '../../posts/services/post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../../category/services/category.service';
import { Category } from '../../category/models/Category';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/posts/models/Post';

@Component({
  selector: 'app-formpost',
  templateUrl: './formpost.component.html',
  styleUrls: ['./formpost.component.css']
})
export class FormpostComponent implements OnInit {
  valid!: boolean;

  constructor(private categoryService : CategoryService, private PostService : PostService, private FormBuilder : FormBuilder) { }

  post! : Post[];

  category !: Category[];

  formulario !: FormGroup;


  ngOnInit(): void {

    this.categoryService.list().subscribe(
      dados=> this.category = dados
    )
    this.create();


  }


  create(){
    this.formulario = this.FormBuilder.group({
      tittle : ['', Validators.required],
      subtittle : ['', Validators.required],
      author : ['', Validators.required],
      text : ['', Validators.required],
      category_id :['', Validators.required],
    })
  }


  onSubmit(){
    if(this.formulario.valid){
      this.PostService.addPost(this.formulario.value).subscribe(
        result => {
          this.valid  = true;
          this.formulario.reset()
        }, erroResponse => {
          console.log(erroResponse)
        })

    }
  }


}
