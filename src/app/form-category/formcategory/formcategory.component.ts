import { Category } from './../../shared/Category';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';
import { CategoryService } from 'src/app/shared/services/category.service';


@Component({
  selector: 'app-formcategory',
  templateUrl: './formcategory.component.html',
  styleUrls: ['./formcategory.component.css']
})
export class FormcategoryComponent implements OnInit {

  valid : boolean = false;

  formulario !: FormGroup;
  error: any;

  constructor(private formBuilder : FormBuilder, private categoryService : CategoryService) {

   }

  ngOnInit(): void {
    this.create();
  }

  create(){
    this.formulario = this.formBuilder.group({
      name : [null, Validators.required]
    })
  }

  onSubmit(){
    if(this.formulario.valid){
      this.categoryService.addCategory(this.formulario.value).subscribe(
        result => {
          this.valid  = true;
          this.formulario.reset()
        }, erroResponse => {
          console.log(erroResponse)
        })

      this.formulario.reset()

    }


  }


}



