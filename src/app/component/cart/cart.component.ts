import { Component, OnInit } from '@angular/core';
import { Cart } from '../../shared/Cart';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
cart !: Cart
  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {

  }

}
