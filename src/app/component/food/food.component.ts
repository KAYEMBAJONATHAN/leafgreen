import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data.service';
import { GreenLeaf } from '../../shared/models/greenLeaf';
import { CartService } from '../../cart.service';
import { CartComponent } from "../cart/cart.component";

@Component({
    selector: 'app-food',
    standalone: true,
    templateUrl: './food.component.html',
    styleUrl: './food.component.css',
    imports: [
        CommonModule,
        CartComponent
    ]
})
export class FoodComponent implements OnInit{
  greenLeaf!: GreenLeaf;
  tag: any;
 
  constructor(private api:  DataService, 
    activateRoute: ActivatedRoute,
    private cartService: CartService,
    private router: Router ){
     activateRoute.params.subscribe((params) => {
        if(params['id'])
          this.greenLeaf = this.api.getAllVeggiesById(params['id'])
     })
  }

  ngOnInit(): void {
    
  }
  addToCart() {
    this.cartService.addToCart(this.greenLeaf);
    this.router.navigateByUrl('/cart');
  }
}
