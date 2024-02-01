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
      starts: 8.3,
      imageUrl: '',
      orgins: ['matadi'],
      DeliveryTime: '9-23',
      tag: ['Tomato', 'Chili', 'Potatoes']
    }
  ];

  constructor() {}
}
