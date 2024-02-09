import { Tag } from "./app/shared/models/Tag";
import { GreenLeaf } from "./app/shared/models/greenLeaf";

export const sample_veggies: GreenLeaf[] = [
    {
      id: '1',
      name: 'Green Pepper',
      price: 34,
      favorite: false,
      stars: 8.3,
      imageUrl: '../assets/green-peppers.jpg',
      orgins: ['matadi'],
      deliveryTime: '9-23',
      tag: ['Most Health veggies']
    },
    {
      id: '2',
      name: 'Chilli',
      price: 30,
      favorite: false,
      stars: 5.3,
      imageUrl: '../assets/chilli.jpg',
      orgins: ['mitedi'],
      deliveryTime: '8-2',
      tag: ['health-benefits-of-chilli']
    },
    {
      id: '3',
      name: 'Carrots',
      price: 30,
      favorite: false,
      stars: 5.3,
      imageUrl: '../assets/carrot.jpeg',
      orgins: ['bukavu'],
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
      orgins: ['kishasa'],
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
      orgins: ['Bas congo'],
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
      orgins: ['Lomami'],
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
      orgins: ['Katanga'],
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
      orgins: ['Mbm'],
      deliveryTime: '4-2',
      tag: ['Red Pepper']
    }
  ];

 export const sample_tags: Tag[] = [
    { name: 'All', count: 9 },
    { name: 'Chilli', count: 8 },
    { name: 'Tomate', count: 15 },
    { name: 'Green Pepper', count: 4 },
    { name: 'Banana', count: 7 },
    { name: 'Plantin', count: 5 },
    { name: 'Pondu', count: 2 },
    { name: 'Red Pepper', count: 2 },
  ];