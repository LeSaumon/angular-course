import { Component, inject } from '@angular/core';
import { ShopService } from './shop.service';
import { MatCardImage, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [MatCardModule, MatCardImage],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  shopService = inject(ShopService)
}
