import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from '../shared/chart/chart.component';
import { CharProductComponent } from './char-product/char-product.component';
import { ListComponent } from './list/list.component';
import { ProductComponent } from './product/product.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'chart', component: CharProductComponent},
  {path: ':id', component: ProductComponent},
  {path: 'view/:type', component: ViewComponent},
  {path: 'view/:type/:id', component: ViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
