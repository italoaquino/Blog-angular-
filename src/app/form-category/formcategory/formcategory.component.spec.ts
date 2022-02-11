import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcategoryComponent } from './formcategory.component';

describe('FormcategoryComponent', () => {
  let component: FormcategoryComponent;
  let fixture: ComponentFixture<FormcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
