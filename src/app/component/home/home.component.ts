import { Component, OnInit } from '@angular/core';
import { GreenLeaf } from '../../shared/models/greenLeaf';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{
   greenLeafs: GreenLeaf[] = [];
   
  constructor(private api: DataService){
    this.greenLeafs = api.getAll();
  }

  ngOnInit(): void {
    
  }

}
