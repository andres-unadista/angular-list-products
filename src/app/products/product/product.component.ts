import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, AfterViewInit {
  product: Product = {} as Product;
  productId: number = 0;

  constructor(
    private route:ActivatedRoute,
    private _product: ProductService
  ) {}

  ngAfterViewInit(): void {
    this.getProduct();
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params.id;
    
  }

  getProduct(){
    this._product.findProductById(this.productId).subscribe((response) => {
      console.log(response);
      this.product = response.body;
    })
  }

  emptyProduct(){
    return Object.keys(this.product).length === 0;
  }
}
