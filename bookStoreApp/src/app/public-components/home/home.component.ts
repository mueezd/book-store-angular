import { publishFacade } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';
import { AuthorModel } from 'src/app/shared/models/authors.model';
import { CounterService } from 'src/app/shared/services/counter.service';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements  OnInit {

  public count: number = 0;
  public test: boolean = false;
  public address: string = 'Bangladesh';
  public obj: AuthorModel = {
    id: 10,
    name: 'deepro'
  };

  constructor() { 
    console.log('Hello from parent constractor');
  }



  public counter(): void {
    this.count++;
    this.test = !this.test;
    this.obj.id = this.count++;
    this.address = this.address + this.count;
  }


  ngOnInit(): void {
    console.log('Hello from parent NgOninit');
  }

}
