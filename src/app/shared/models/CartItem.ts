import { GreenLeaf } from "./greenLeaf";

export class CartItem {
    constructor(private greenLeaf: GreenLeaf){
       this.publicGreenLeaf = greenLeaf 
    }

    publicGreenLeaf!: GreenLeaf;

    quantity: number = 1;
    price: number = this.greenLeaf.price;
}