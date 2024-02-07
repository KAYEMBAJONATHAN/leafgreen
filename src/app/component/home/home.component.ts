import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { GreenLeaf } from '../../shared/models/greenLeaf';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{
   greenLeafs: GreenLeaf[] = [];
   
  constructor(private api: DataService, activateRoute: ActivatedRoute){
    activateRoute.params.subscribe( (params) => {
     if(params['searchTerm']) {
      this.greenLeafs= this.api.getAllGreenLeafByTerm(params['searchTerm']);
     }
    else
    this.greenLeafs = api.getAll();
    })
  
  }

  ngOnInit(): void {
    
  }

}
