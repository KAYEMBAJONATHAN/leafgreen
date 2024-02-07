import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Tag } from '../../shared/models/Tag';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule 
  ],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent implements OnInit{
  tag: Tag[];

  constructor(api: DataService) {
    this.tag = api.getAllTags();
  }

  ngOnInit(): void {
    
  }

}
