import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { GreenLeaf } from '../../shared/models/greenLeaf';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';
import { TagComponent } from "../tag/tag.component";
import { SearchTermComponent } from '../search-term/search-term.component';
import { FoodComponent } from "../food/food.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule,
        TagComponent,
        SearchTermComponent, FoodComponent]
})

export class HomeComponent implements OnInit{
   greenLeafs: GreenLeaf[] = [];
   
  constructor(private api: DataService, activateRoute: ActivatedRoute){
     activateRoute.params.subscribe( (params) => {
       if(params['searchTerm']) 
         this.greenLeafs= this.api.getAllGreenLeafByTerm(params['searchTerm']);
       else if(params['tag'])
         this.greenLeafs = this.api.getAllGreenLeafByTerm(params['tag'])
       else
         this.greenLeafs = api.getAll();
    })
  
  }

  ngOnInit(): void {
    
  }

}
