import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-char-product',
  templateUrl: './char-product.component.html',
  styleUrls: ['./char-product.component.scss']
})
export class CharProductComponent implements OnInit {
  isDisableGraph:boolean = true;

  constructor(private _product:ProductService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    console.log('listado');
    this._product.listProducts().subscribe(response => {
      let products = response.body;
      if (products.length > 0) {
        this.isDisableGraph = false;
      }
      products.map((product) => {
        this._product.labelProducts.push(product.name)
        this._product.listQuantities.push(product.quantity)
      });
      console.log(products);
    })
  }

}
