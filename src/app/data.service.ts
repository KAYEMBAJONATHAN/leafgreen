import { Injectable } from '@angular/core';
import { GreenLeaf } from './shared/models/greenLeaf';
import { sample_tags, sample_veggies } from '../Data';
import { Tag } from './shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}
 getAll(): GreenLeaf[] {
  return sample_veggies;
 }

 getAllGreenLeafByTerm(searchTerm: string) {
  return this.getAll().filter
  (greenLeaf=> greenLeaf.name.toLowerCase()
  .includes(searchTerm.toLowerCase()))
 }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllVeggiesByTag(tag: string) {
    return tag === 'All'? this.getAll():
     this.getAll().filter(greenLeaf => 
      greenLeaf.tag?.includes(tag));
  }

  getAllVeggiesById(greenLeafId: string) {
    return this.getAll().find(greenLeaf => greenLeaf.id === greenLeafId) ?? new GreenLeaf();
  }
}


