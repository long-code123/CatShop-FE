import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cat-list',
  standalone: false,
  templateUrl: './cat-list.component.html',
  styleUrl: './cat-list.component.css',
})
export class CatListComponent {
  public cats = [
    {
      name: 'British Shorthair',
      description: 'A charming cat with a calm and gentle nature.',
      image: 'https://example.com/british-shorthair.jpg',
    },
    {
      name: 'Persian',
      description: 'Known for their long, luxurious coats and calm demeanor.',
      image: 'https://example.com/persian.jpg',
    },
    {
      name: 'Sphynx',
      description: 'A hairless cat breed, known for its affectionate nature.',
      image: 'https://example.com/sphynx.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.cats);
  }
}
