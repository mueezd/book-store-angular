import { Component, Input } from '@angular/core';
import { BooksModule } from '../../books.module';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input('allBooks') books: BookModel[];

  
  
  
  
  private _books: BookModel[];
}
