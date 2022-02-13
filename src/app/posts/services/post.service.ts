import { Post } from '../models/Post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient : HttpClient) { }

  readonly API = 'http://localhost:8080/v1/posts/'

  list(){
    return this.httpClient.get<Post[]>(this.API);
  }


  addPost(post : Post) : Observable<Post>{
    return this.httpClient.post<Post>(this.API, post)
  }

  findById(id : any){
    let direcction = this.API + id;
    return this.httpClient.get<Post>(direcction)
  }

  delete(id : any){
    let direcction = this.API + id;
    return this.httpClient.delete(direcction)
  }

  update(post: Post,id : any){
    let direcction = this.API + id;
    return this.httpClient.put(direcction, post)
  }

}
