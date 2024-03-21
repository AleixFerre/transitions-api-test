import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { books as mockedBooks } from './book.mocks';

@Component({
  standalone: true,
  selector: 'app-books-page',
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
})
export class BooksPageComponent {
  books = mockedBooks;
}
