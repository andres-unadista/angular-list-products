import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  products: Product[] = [];
  collectionSize: number = 0;
  pageSize: number = 2;
  page: number = 1;

  constructor(private _product: ProductService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this._product.listProducts().subscribe(
      (response) => {
        if (response.body) {
          this.products = response.body;
        }
        this.collectionSize = this.products.length;
      },
      (error) => {
        console.log(error), (this.products = []);
      }
    );
  }

  deleteProduct(id: number) {
    let confirmDelete = confirm('¿Seguro que desea eliminar el product?');
    if (confirmDelete) {
      this._product.deleteProduct(id).subscribe(
        (response) => {
          this.products = this.products.filter(products => products.id !== id)
          alert('Producto eliminado');
        },
        (err) => console.error(err)
      );
    }
  }
}
