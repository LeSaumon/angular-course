import { Component, inject } from '@angular/core';
import { ShopService } from './shop.service';
import { MatCardImage, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [MatCardModule, MatCardImage, MatButtonModule, AsyncPipe],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  products$!: Observable<any>
  ngOnInit(): void {
    this.products$ = this.shopService.fetchProduct()
    this.products$.subscribe(pr => console.log(pr))
  }
  shopService = inject(ShopService)
}
