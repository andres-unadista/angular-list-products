import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CharProductComponent } from './char-product/char-product.component';

@NgModule({
  declarations: [
    ListComponent,
    ViewComponent,
    ProductComponent,
    CharProductComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductsRoutingModule,
    SharedModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule { }
