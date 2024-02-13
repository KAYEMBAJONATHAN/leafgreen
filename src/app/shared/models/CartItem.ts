import { GreenLeaf } from "./greenLeaf";

export class CartItem {
    publicGreenLeaf: GreenLeaf;

    quantity: number = 1;
    price: number;

    constructor(greenLeaf: GreenLeaf){
      
       if (greenLeaf) {
           this.publicGreenLeaf = greenLeaf;
           this.price = greenLeaf.price;
       } else {
           
           throw new Error("GreenLeaf is undefined");
       }
    }
}
