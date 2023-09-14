import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  "providedIn": "root"
})
export class BookService {

  private allBooks = [
    {
      "id": 1,
      "title":"Angular fundamentals",
      "totalPages": 456,
      "author": "Ram Sing",
      "price":{
        "currency":"USD",
        "value": 10
      }
    },
    {
      "id": 1,
      "title":"Angular fundamentals",
      "totalPages": 456,
      "author": "Ram Sing",
      "price":{
        "currency":"USD",
        "value": 10
      }
    },
    {
      "id": 2,
      "title":"Java fundamentals",
      "totalPages": 999,
      "author": "deepro Sing",
      "price":{
        "currency":"USD",
        "value": 20
      }
    },
    {
      "id": 3,
      "title":".NET fundamentals",
      "totalPages": 2400,
      "author": "Ram Sing",
      "price":{
        "currency":"USD",
        "value": 70
      }
    }
  ];
  constructor() { }

  public addBook(bookModel: BookModel): void{
    this.allBooks.push(bookModel);
  }

  public getBooks(): any[] {
    return this.allBooks;
  }


  public recentBooks(): any[] {
    return [
      {
        "id": 1,
        "title":"Angular fundamentals",
        "totalPages": 456,
        "author": "Ram Sing",
        "price":{
          "currency":"USD",
          "value": 10
        }
      },
      {
        "id": 2,
        "title":"Angular fundamentals",
        "totalPages": 456,
        "author": "Ram Sing",
        "price":{
          "currency":"USD",
          "value": 10
        }
      }
    ]
  }
}


