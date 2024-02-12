import { Injectable } from '@angular/core';
import { GreenLeaf } from './shared/models/greenLeaf';
import { Cart } from './shared/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from './shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();
  private CartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

//AddCart
  constructor() { }

  addToCart(greenLeaf: GreenLeaf):void {
    let cartItem = this.cart.items.find(item => item.publicGreenLeaf.id === greenLeaf.id);
      if(cartItem)
        return;

        this.cart.items.push(new CartItem(greenLeaf))
        this.setCartLocalStorage();
  }

//RemoveCart
  removeFromCart(greenLeafId: string):void {
     this.cart.items = this.cart.items.filter(item => item.publicGreenLeaf.id != greenLeafId);
     this.setCartLocalStorage();
  }

  //quantity
  changeQuantity(greenLeafId: string, quantity: number) {
    let cartItem = this.cart.items.find(item => item.publicGreenLeaf.id === greenLeafId);
    if(!cartItem)
    return;

   cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.publicGreenLeaf.price;
    this.setCartLocalStorage();
  }

  //cleraCart
  clearCart() {
    this.cart = new Cart;
    this.setCartLocalStorage();
  }

  //get
  getCartObservable ():Observable<Cart> {
   return this.CartSubject.asObservable();
  }

  //storage
  private setCartLocalStorage():void {
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => 
      prevSum + currentItem.price, 0);
      this.cart.totalCount = this.cart.items.reduce((prevsum, currentItem) =>
      prevsum + currentItem.quantity, 0)

      const CartJson = JSON.stringify(this.cart);
      localStorage.setItem('Cart', CartJson);
      this.CartSubject.next(this.cart);
  }


  private getCartFromLocalStorage() {
    const CartJson = localStorage.getItem('Cart');
    return CartJson?JSON.parse(CartJson): new Cart();
  }
}
