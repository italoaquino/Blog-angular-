import { error } from 'jquery';
import { catchError, empty, Observable, of } from 'rxjs';
import { Post } from '../models/Post';
import { PostService } from '../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  $post !: Observable<Post[]>

  constructor(private postService : PostService, private router : Router) { }

  ngOnInit(): void {

    this.$post = this.postService.list()
      .pipe(catchError(error => {
        console.log(error)
        return of([])
      }))

  }


  edit(id : any){
    this.router.navigate(['editarPost', id])
  }


  delete(id : any){
   return this.postService.delete(id).subscribe(

   )

  }

}
