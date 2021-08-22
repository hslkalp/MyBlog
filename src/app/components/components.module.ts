import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



import { CategoryMenuComponent } from './category-menu/category-menu.component';


@NgModule({
  declarations: [CategoryMenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CategoryMenuComponent
  ]
})
export class ComponentsModule { }
