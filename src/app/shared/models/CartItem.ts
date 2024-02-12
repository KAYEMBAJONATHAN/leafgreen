import { GreenLeaf } from "./greenLeaf";

export class CartItem {
    constructor(private greenLeaf: GreenLeaf){
        
    }

    quantity: number = 1;
    price: number = this.greenLeaf.price;
}