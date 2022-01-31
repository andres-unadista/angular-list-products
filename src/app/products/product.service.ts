import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {catchError} from 'rxjs/operators'
import { Product, ProductResponse } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  labelProducts: string[] = [];
  listQuantities: number[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'aplication/json',
      'Authorization': `Bearer ${environment.token}`
    })
  }

  constructor(private _http:HttpClient) { }

  /**
   * listProducts
   */
  public listProducts():Observable<ProductResponse> {
    return this._http.get<ProductResponse>(`${environment.apiURl}info/product`, this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }
  /**
   * findProductById
   */
  public findProductById(id:number):Observable<any> {
    return this._http.get<any>(`${environment.apiURl}info/product/${id}`, this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }

  /**
   * updateProduct
   */
   public updateProduct(id:number, product:Product):Observable<ProductResponse> {
    return this._http.put<ProductResponse>(`${environment.apiURl}info/product/${id}`, product, this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }
 
  /**
   * createProduct
   */
   public createProduct(product:Product):Observable<ProductResponse> {
    return this._http.post<ProductResponse>(`${environment.apiURl}info/product`, product, this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }
 
  /**
   * 
   * @param product Product
   * @returns Observable
   */
   public deleteProduct(id:number):Observable<ProductResponse> {
    return this._http.delete<ProductResponse>(`${environment.apiURl}info/product/${id}`, this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }

 /**
  * errorHandler
  */
 public errorHandler(errorParam:any) {
   let errorMessage = '';
   if(errorParam.error instanceof ErrorEvent){
    errorMessage = errorParam.error.message;
   } else {
     errorMessage = `Error code: ${errorParam.status} \n Message: ${errorParam.message}`
   }
   return throwError(errorMessage);
 }
}
