import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Book, books as mockedBooks } from "../books-page/book.mocks";

@Component({
  selector: 'app-book-detail-page',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './book-detail-page.component.html',
  styleUrls: ['./book-detail-page.component.scss']
})
export class BookDetailPageComponent {

  public book?: Book;

  @Input() set id(value: string) {
    this.book = mockedBooks.find(book => book.id === value);
  }
}
