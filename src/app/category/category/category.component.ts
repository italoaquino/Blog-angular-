import { Category } from './../../shared/Category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category !: Category[]

  constructor(private categoryService : CategoryService, private router : Router) { }

  ngOnInit(): void {
    this.categoryService.list().subscribe(
      dados => this.category =dados
    )
  }

  editarCategory(id: any){
    this.router.navigate(['editar', id])
  }


  delete(id : any){
    return this.categoryService.delete(id).subscribe(
      dado =>{
        alert('deletado!');
      }
    )
  }

}
