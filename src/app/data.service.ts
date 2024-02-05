// Assuming the image is in the 'assets' folder, and 'green-peppers.jpg' is directly in the 'assets' folder
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
      imageUrl: '../assets/green-peppers.jpg',
      orgins: ['matadi'],
      deliveryTime: '9-23',
      tag: ['Green Pepper']
    },
    {
      id: '2',
      name: 'Chilli',
      price: 30,
      favorite: false,
      stars: 5.3,
      imageUrl: '../assets/chilli.png',
      orgins: ['mitedi'],
      deliveryTime: '8-2',
      tag: ['Chili']
    },
    {
      id: '3',
      name: 'Carrots',
      price: 30,
      favorite: false,
      stars: 5.3,
      imageUrl: '../assets/carrot.jpeg',
      orgins: ['mitedi'],
      deliveryTime: '8-2',
      tag: ['Carrots']
    },
    {
      id: '4',
      name: 'Tomate',
      price: 30,
      favorite: false,
      stars: 5.3,
      imageUrl: '../assets/tomate.jpg',
      orgins: ['mitedi'],
      deliveryTime: '8-2',
      tag: ['Tomate']
    },

    {
      id: '5',
      name: 'Banana',
      price: 14,
      favorite: false,
      stars: 3.3,
      imageUrl: '../assets/bananas.jpg',
      orgins: ['matadi'],
      deliveryTime: '5-23',
      tag: ['Banana']
    },
    {
      id: '6',
      name: 'Plantin',
      price: 50,
      favorite: false,
      stars: 2.3,
      imageUrl: '../assets/plantin.jpg',
      orgins: ['mitedi'],
      deliveryTime: '1-2',
      tag: ['Plantin']
    },
    {
      id: '7',
      name: 'Pondu',
      price: 21,
      favorite: false,
      stars: 3.3,
      imageUrl: '../assets/pondu.jpg',
      orgins: ['mitedi'],
      deliveryTime: '7-2',
      tag: ['Pondu']
    },
    {
      id: '8',
      name: 'Red Pepper',
      price: 20,
      favorite: false,
      stars: 6.3,
      imageUrl: '../assets/red-pepper.jpg',
      orgins: ['mitedi'],
      deliveryTime: '4-2',
      tag: ['Red Pepper']
    }
  
  ];

  constructor() {}

  getAll(): GreenLeaf[] {
    return this.sample_veggies;
  }

  // Search
  getAllGreenLeafByTerm(searchTerm: string) {
    return this.getAll().filter(greenLeaf =>
      greenLeaf.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
