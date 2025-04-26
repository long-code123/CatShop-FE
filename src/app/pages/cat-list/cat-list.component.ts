import { Component } from '@angular/core';

@Component({
  selector: 'app-cat-list',
  standalone: false,
  templateUrl: './cat-list.component.html',
  styleUrl: './cat-list.component.css',
})
export class CatListComponent {
  title = 'Cat List';
}
