import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { CounterService } from 'src/app/shared/services/counter.service';
import { Counter2Service } from 'src/app/shared/services/counter2.service';



@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],
})
export class AllBooksComponent implements OnInit {

private _pageTitle: string;

public set pageTitle(value: string){
  this._pageTitle = value;
}

public get pageTitle(){
  return this._pageTitle;
}



  public books: BookModel[] = [];

  constructor(public bookService: BookService, public counter2Service: Counter2Service) {

  }


  public increase(): void {
    this.counter2Service.incCounter();
  }


  public decreas(): void {
    this.counter2Service.decCounter();
  }
  ngOnInit(): void {
    this.pageTitle = 'All Books';
    const allBooks = this.bookService.getBooks();
    allBooks.forEach(b => {
      var obj = new BookModel();
      obj.id = b.id;
      obj.author = b.author;
      obj.price = b.price;
      obj.title = b.title;
      obj.totalPages = b.totalPages;
      obj.isPublished = b.isPublished;
      obj.publishedOn = b.publishedOn;
      this.books.push(obj);
    })

    console.log(this.books);
  }

}
