import { Injectable } from '@angular/core';
import { GreenLeaf } from './shared/models/greenLeaf';
import { Cart } from './shared/Cart';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from './shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();
  private CartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() { }

  addToCart(greenLeaf: GreenLeaf):void {
    let cartItem = this.cart.items.find(item => item.greenLeaf.id === greenLeaf.id);
      if(cartItem)
        return;

        this.cart.items.push(new CartItem(greenLeaf))
  }

  removeFromCart(greenLeafId: string):void {
     this.cart.items = this.cart.items.filter(item => item.greenLeaf.id != greenLeafId);
  }

  changeQuantity(greenLeafId: string, quantity: number) {
    let cartItem = this.cart.items.find(item => item.greenLeaf.id === greenLeafId);
    if(!cartItem)
    return;

   cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.greenLeaf.price;
  }

  clearCart() {
    this.cart = new Cart;
  }
}
