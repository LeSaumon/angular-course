import { Injectable, signal, WritableSignal } from '@angular/core';
import { Product } from '../../shared/types/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  protected products: WritableSignal<Product[]> = signal([])

  constructor(readonly http: HttpClient) {
  }

  fetchProduct(): Observable<any> {
    return this.http.get<any>("https://fakestoreapi.com/products")
  }

}
