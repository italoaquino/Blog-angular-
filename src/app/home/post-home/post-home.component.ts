import { Post } from 'src/app/posts/models/Post';
import { catchError, Observable, of } from 'rxjs';
import { PostService } from './../../posts/services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.css']
})
export class PostHomeComponent implements OnInit {

  post$ !: Observable<Post[]>

  constructor(private postService : PostService) { }



  ngOnInit(): void {
    this.post$ = this.postService.list().pipe
    (catchError(error => {
      console.log(error)
      return of([])
    }))
    }
}
