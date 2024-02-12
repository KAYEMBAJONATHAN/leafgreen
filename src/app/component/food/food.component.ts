import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { GreenLeaf } from '../../shared/models/greenLeaf';

@Component({
  selector: 'app-food',
  standalone: true,
  templateUrl: './food.component.html',
  styleUrl: './food.component.css',
  imports:[
    CommonModule,
  ]
})
export class FoodComponent implements OnInit{
  greenLeaf!: GreenLeaf;
  tag: any;
 
  constructor(private api:  DataService, activateRoute: ActivatedRoute){
     activateRoute.params.subscribe((params) => {
        if(params['id'])
          this.greenLeaf = this.api.getAllVeggiesById(params['id'])
     })
  }

  ngOnInit(): void {
    
  }

}
