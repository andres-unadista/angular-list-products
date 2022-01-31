import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  updateState = false;
  loadData = false;
  formProduct: FormGroup;
  idProduct: number = 0;

  constructor(
    private router: Router,
    private routeActivate: ActivatedRoute,
    private _product: ProductService
  ) {
    this.formProduct = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ -']+"),
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      description: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      image: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
    this.idProduct = this.routeActivate.snapshot.params.id;
    let type = this.routeActivate.snapshot.params.type;

    if (type == 2) {
      this.updateState = true;
      this.edit();
    }
  }

  edit(){
    this._product.findProductById(this.idProduct).subscribe(response => {
      let {name, description, price, quantity, image} = response.body;
      let product = {name, description, price, quantity, image};
      this.formProduct.setValue(product);
      this.loadData = true;
    })
  }

  update() {
    this.idProduct = this.routeActivate.snapshot.params.id;

    this._product
      .updateProduct(this.idProduct, this.formProduct.value)
      .subscribe(
        (response) => {
          this.router.navigate(['/']);
        },
        (err) => console.error(err)
      );
  }

  save() {
    this._product.createProduct(this.formProduct.value).subscribe(
      (response) => {
        this.router.navigate(['/']);
      },
      (err) => console.error(err)
    );
  }

  get f() {
    return this.formProduct.controls;
  }
}
