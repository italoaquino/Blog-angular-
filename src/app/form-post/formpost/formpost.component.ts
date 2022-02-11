import { CategoryService } from './../../shared/services/category.service';
import { Category } from './../../shared/Category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formpost',
  templateUrl: './formpost.component.html',
  styleUrls: ['./formpost.component.css']
})
export class FormpostComponent implements OnInit {

  constructor(private categoryService : CategoryService) { }

  category !: Category[];

  ngOnInit(): void {

    this.categoryService.list().subscribe(
      dados=> this.category = dados
    )

  }


}
