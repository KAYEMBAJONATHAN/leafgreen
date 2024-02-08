import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { GreenLeaf } from '../../shared/models/greenLeaf';
import { RatingModule } from 'ng-starrating/public-api';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent implements OnInit{
  greenLeaf!: GreenLeaf;

  constructor(private api:  DataService, activateRoute: ActivatedRoute){
    activateRoute.params.subscribe((params) => {
      if(params['id'])
      this.greenLeaf = this.api.getAllVeggiesById(params['id'])
    })
  }

  ngOnInit(): void {
    
  }

}
