import { Injectable } from '@angular/core';
import { GreenLeaf } from './shared/models/greenLeaf';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sample_veggies: GreenLeaf[] = [
    {
      id: '1',
      name: 'Green Pepper',
      price: 34,
      favorite: false,
      stars: 8.3,
      imageUrl: './assets/green-peppers.jpg',
      orgins: ['matadi'],
      DeliveryTime: '9-23',
      tag: ['Tomato', 'Chili', 'Potatoes']
    }
  ];

  constructor() {}

  getAll():GreenLeaf[] {
    return this.sample_veggies
  }
}
