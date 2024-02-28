// category-list.component.ts
import { Component, Input } from '@angular/core';
import { categories } from '../categories';

@Component({
  selector: 'app-category-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoryListComponent {
  categories = [...categories] // Pass categories from parent component
}
