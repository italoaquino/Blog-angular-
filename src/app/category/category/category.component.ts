import { Post } from 'src/app/posts/models/Post';
import { error } from 'jquery';
import { Observable, catchError, of } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/Category';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  modalRef?: BsModalRef;


  $category !: Observable<Category[]>

  @ViewChild('deleteModel') deleteModel: any;

  constructor(private categoryService : CategoryService, private router : Router, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.$category = this.categoryService.list()
      .pipe(catchError(error => {
        console.log(error)
        return of([])
      }))
  }

  editarCategory(id: any){
    this.router.navigate(['editar', id])
  }


  confirmeDelete(category : Category){
    this.modalRef = this.modalService.show(this.deleteModel, {class: 'modal-sm'})
  }


  delete(id : any){
    return this.categoryService.delete(id).subscribe(
      dado =>{
        alert('deletado!');
      }
    )
  }

}
