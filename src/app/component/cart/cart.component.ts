import { Component, OnInit } from '@angular/core';
import { Cart } from '../../shared/Cart';
import { CartService } from '../../cart.service';
import { CartItem } from '../../shared/models/CartItem';
import { TitleComponent } from "../title/title.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    imports: [TitleComponent, CommonModule, RouterModule]
})
export class CartComponent implements OnInit{
cart !: Cart
  constructor(private cartService: CartService) {
     this.cartService.getCartObservable().subscribe((cart) => {
        this.cart = cart;
     })
  }

  ngOnInit(): void {

  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.publicGreenLeaf.id);
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
     const quantity = parseInt(quantityInString);
     this.cartService.changeQuantity(cartItem.publicGreenLeaf.id, quantity);
  }
}
