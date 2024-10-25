import { Injectable } from '@angular/core';
import { ProductItem } from '../../shared/types/ProductItem';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  productList: ProductItem[] = [
    {
      title: "Wonderful",
      price: 200,
      description: "I am a wonderful product, trully",
      image: "https://picsum.photos/id/122/400/200"
    },

  ]

  getItems(): ProductItem[] {
    return this.productList
  }
  getProduct(id: number): ProductItem | undefined {
    if (id + 1 > this.productList.length) return;
    return this.productList[id]
  }
  constructor() { }
}
