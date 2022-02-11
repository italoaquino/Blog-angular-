import { data } from 'jquery';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Category } from '../shared/Category';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  category! : Category;



  constructor(private activerouter : ActivatedRoute, private router : Router, private categoryService : CategoryService) { }



  editform = new FormGroup({
    name : new FormControl('')
  })

  ngOnInit(): void {

    let id = this.activerouter.snapshot.paramMap.get('id');
    this.categoryService.findById(id).subscribe(
      data =>{
        this.category =data
        this.editform.setValue({
          'name' : this.category.name
        })
      }
    )
  }


  postForm(form : Category, id : any){
    this.categoryService.update(form, id).subscribe(
      data => console.log('deu certo!')
    )
  }



}
