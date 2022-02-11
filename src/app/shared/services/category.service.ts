import { Category } from './../Category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { error } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly URL = 'http://localhost:8080/v1/categories/'

  constructor(private HttpCLiente : HttpClient) { }

  list(){
    return this.HttpCLiente.get<Category[]>(this.URL);
  }

  addCategory(category : Category) : Observable<Category>{
    return this.HttpCLiente.post<Category>(this.URL, category)
  }

  findById(id : any){
    let direcction = this.URL + id;
    return this.HttpCLiente.get<Category>(direcction);
  }

  update(category : Category, id : any){
    let direcction = this.URL + id;
    return this.HttpCLiente.put(direcction, category);
  }

  delete(id : any){
    let direcction = this.URL + id;
    return this.HttpCLiente.delete(direcction)
  }




}
